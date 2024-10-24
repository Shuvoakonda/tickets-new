<?php

namespace App\Http\Controllers;

use Sohoj;
use Illuminate\Support\Str;
use App\Http\Resources\EventCollection;
use App\Http\Resources\ProductCollection;
use App\Mail\TicketDownload;
use App\Models\Event;
use App\Models\Extra;
use App\Models\Order;
use App\Models\Product;
use App\Models\Ticket;
use App\Services\TOCOnlineService;
use Error;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

use Vemcogroup\SmsApi\SmsApi;

class ApiController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->get('per_page', 10);

        $query = $request->get('query');
        $event_id = $request->get('event_id');
        $event_date = $request->get('event_date');

        $products = Product::with('event')
            ->where('name', 'like', "%{$query}%")
            ->where('status', 1)
            ->whereHas('poses', function ($q) {
                $q->where('pos_id', auth()->user()->pos_id); // Filtering based on user's pos_id
            })
            ->where('type', 'pos')
            ->where('invite_only', 0);

        if ($event_id) {
            $products->where('event_id', $event_id);
        }
        // this may be wrong --- for future ref
        if (!empty($event_date)) {
            $products->whereDate('start_date', '<=', $event_date)
                ->whereDate('end_date', '>=', $event_date);
        }
        $products = $products->paginate($perPage);
        return new ProductCollection($products);
    }

    public function getTicket(Request $request)
    {
        $ticket = Ticket::where('ticket', $request->ticket)->first();
        if (!$ticket)
            return response()->json(['message' => 'No ticket was found'], status: 404);
        $ticketData = [
            "id" => $ticket["id"],
            "owner" => $ticket["owner"],
            "event_id" => $ticket["event_id"],
            "product_id" => $ticket["product_id"],
            "order_id" => $ticket["order_id"],
            "user_id" => $ticket["user_id"],
            "ticket" => $ticket["ticket"],
            "status" => $ticket["status"],
            "dates" => $ticket["dates"],
            "price" => $ticket["price"],
            "created_at" => $ticket["created_at"],
            "updated_at" => $ticket["updated_at"],
            "type" => $ticket["type"],
            "logs" => $ticket["logs"],
            "active" => $ticket["active"],
            "check_in_zone" => $ticket["check_in_zone"],
            "check_out_zone" => $ticket["check_out_zone"],
            "hasExtras" => $ticket["hasExtras"],
            "extras" => [],
        ];
        $extras = $ticket->extras;
        foreach ($extras as $extra) {
            $ticketData['extras'][] = ['id' => $extra['id'], 'name' => Extra::find($extra['id'])->display_name, 'qty' => $extra['qty'], 'price' => Extra::find($extra['id'])->price];
        }

        return response()->json($ticketData);
    }

    public function ticketExtras(Request $request)
    {
        $validatedData = $request->validate([
            'extras' => 'required|array',
            'extras.*' => 'integer|exists:extras,id',
        ]);

        $extrasList = $validatedData['extras'];

        $extras = Extra::whereIn('id', $extrasList)->get();

        return response()->json($extras);
    }

    public function events(Request $request)
    {
        $events = Event::all();

        return new EventCollection($events);
    }

    public function extras(Request $request)
    {
        $perPage = $request->get('per_page', 10);

        $query = $request->get('query');
        $event_id = $request->get('event_id');

        $extras = Extra::with('event')->whereHas('poses', function ($q) {
            $q->where('pos_id', auth()->user()->pos_id); // Filtering based on user's pos_id
        })->where('name', 'like', "%{$query}%");

        if ($event_id) {
            $extras->where('event_id', $event_id);
        }

        $extras = $extras->paginate($perPage);

        return response()->json($extras);
    }

    public function eventExtras(Request $request, $event)
    {
        $perPage = $request->get('per_page', 10);

        $query = $request->get('query');

        $extras = Extra::with('event')->where('name', 'like', "%{$query}%")->where('event_id', $event)->paginate($perPage);

        return response()->json($extras);
    }

    public function createOrder(Request $request)
    {
        // Collect initial order data
        try {

            DB::beginTransaction();
            $orderData = [
                'billing' => request()->get('biling'),
                'user_id' => auth()->id() ?? null,
                'subtotal' => $request->get('subTotal'),
                'discount' => $request->get('discount'),
                'total' => $request->get('total'),
                'status' => 1,
                'payment_status' => 1,
                'payment_method' => $request->get('paymentMethod') ?? 'Pos',
                'transaction_id' => Str::uuid(),
                'security_key' => Str::uuid(),
            ];


            $order = Order::create($orderData);


            // Calculate total quantity of extras and tickets
            $totalItems = 0;
            $extraProducts = $request->get('extras') ?? [];
            $tickets = $request->get('tickets') ?? [];

            foreach ($extraProducts as $extra) {
                $totalItems += $extra['quantity'];
            }
            foreach ($tickets as $ticket) {
                $totalItems += $ticket['quantity'];
            }

            // Calculate discount per unit
            $totalDiscount = $orderData['discount'];
            $discountPerUnit = $totalItems > 0 ? $totalDiscount / $totalItems : 0;


            // Adjust extra product prices
            if (count($extraProducts)) {
                $orderExtras = collect($extraProducts)->map(function ($extra) use ($discountPerUnit) {
                    $extra['price'] -= $discountPerUnit; // Subtract discount per unit
                    return [
                        'id' => $extra['id'],
                        'name' => Extra::find($extra['id'])->display_name,
                        'qty' => $extra['quantity'],
                        'price' => max(0, $extra['price']), // Ensure price doesn't go below zero
                    ];
                })->toArray();
                $order['extras'] = json_encode($orderExtras);
            }

            // Handle ticket creation and price adjustment
            $hollowTickets = [];
            $physicalQr = $request->get('physicalQr');

            foreach ($tickets as $item) {
                $product = Product::findOrFail($item['id']);
                if ($product->quantity < $item['quantity']) {
                    throw new Exception($item['name'] . ' is not available for this quantity');
                }
                $product->quantity -= $item['quantity'];
                $product->save();

                for ($i = 0; $i < $item['quantity']; $i++) {
                    $data = [
                        'owner' => [
                            'name' => request()->get('biling')['name'] ?? '',
                            'email' => request()->get('biling')['email'] ?? '',
                            'vatNumber' => request()->get('biling')['vatNumber'] ?? '',
                            'address' => request()->get('biling')['address'] ?? '',
                        ],
                        'event_id' => $product->event->id,
                        'product_id' => $product->id,
                        'order_id' => $order->id,
                        'ticket' => !$physicalQr ? uniqid() : null,
                        'price' =>  $product->price - $discountPerUnit, // Apply discount per unit
                        'dates' => $product->dates
                    ];

                    $extras = $item['extras'] ?? [];
                    if (count($extras)) {
                        $data['hasExtras'] = true;
                        foreach ($extras as $extra) {
                            $newQuantity = $extra['newQuantity'] ?? 0;
                            $quantity = $extra['quantity'] ?? 0;
                            $price = $extra['price'] ?? 0;
                            if ($newQuantity > $quantity) {
                                $data['price'] += (($newQuantity - $quantity) * $price);
                            }
                        }
                        $data['extras'] = collect($extras)->map(fn($extra) => [
                            'id' => $extra['id'],
                            'name' => Extra::find($extra['id'])->display_name,
                            'qty' => $extra['newQuantity'] ?? $extra['quantity'],
                            'price' => $extra['price']
                        ])->toArray();
                    }
                    $hollowTickets[] = $order->tickets()->create($data);
                }
            }

            // Handle invoice printing or emailing
            $printInvoice = $request->get('printInvoice');
            $sendInvoiceToMail = $request->get('sendInvoiceToMail');
            $toco = new TOCOnlineService;
            $response = $toco->createCommercialSalesDocument($order);

            $order->invoice_id = $response['id'];
            $order->invoice_url = $response['public_link'];
            $order->invoice_body = json_encode($response);

            if ($sendInvoiceToMail) {
                $toco->sendEmailDocument($order, $response['id']);
            }

            $order->save();

            // Send tickets to mail if requested
            $sendTicketsToMail = $request->get('sendToMail');
            if ($sendTicketsToMail) {
                foreach ($tickets as $ticket) {
                    $product = Product::find($ticket['id']);
                    Mail::to($order['billing']->email)->send(new TicketDownload($order, $product, null));
                }
            }

            $phone = isset($orderData['billing']['phone']) ? $orderData['billing']['phone'] : '';
            if ($request->get('sendToPhone')) {
                $message = 'Hello! Here is your page with your tickets and invoice! Please click here on the link: ' . route('digital-wallet', $order) . ' !!';
                SmsApi::send($phone,  $message);
            }
            // Return the order with tickets
            $order['tickets'] = $hollowTickets;
            DB::commit();
            if ($printInvoice == false) {

                $order = $order->invoice_url = null;
                // Add invoice creation logic if needed
            }
            return response()->json($order);
        } catch (Exception | Error $e) {
            DB::rollBack();
            return response()->json(['message' => $e->getMessage(), 'status' => false], 400);
        }
    }


    public function updateTicket(Request $request)
    {
        $requestTicket = $request->ticket;
        $ticket = Ticket::findOrFail($requestTicket['id']);
        $ticket->extras = collect($requestTicket['extras'])->map(fn($extra) => ['id' => $extra['id'], 'name' => Extra::find($extra['id'])->display_name, 'qty' => $extra['newQty'] ?? $extra['qty'], 'price' => $extra['price']])->toArray();
        $ticket->save();

        $totalPrice = 0;
        $extras = [];
        foreach ($requestTicket['extras'] as $extra) {
            $quantity = (int)(($extra['newQty'] ?? $extra['qty']) - $extra['qty']);
            if ($quantity > 0) {
                $price =  $quantity * $extra['price'];
                $totalPrice += $price;
                $extras[] = ['id' => $extra['id'], 'name' => Extra::find($extra['id'])->display_name, 'qty' => $quantity, 'price' => $quantity * $extra['price']];
            }
        }

        $orderData = [
            'user_id' => $ticket['user_id'],
            'subtotal' => $totalPrice,
            'discount' => 0,
            'total' => $totalPrice,
            'status' => 1,
            'payment_status' => 1,
            'payment_method' => 'pos',
            'transaction_id' => Str::uuid(),
            'security_key' => Str::uuid(),
            'extras' => json_encode($extras)
        ];
        $order = Order::create($orderData);
        return response()->json(['ticket' => $ticket, 'order' => $order]);
    }

    public function updateTicketCode(Request $request)
    {
        $requestTicket = $request->ticket;
        $ticket = Ticket::where('id', $requestTicket)->where('ticket', null)->first();
        if (!$ticket) {
            return response()->json(['message' => 'Ticket already scanned.']);
        }
        $ticket->ticket = $request->code;
        $ticket = $ticket->save();
        return response()->json(['ticket' => $ticket]);
    }

    public function activateTicket(Request $request)
    {
        $requestTicket = $request->ticket;
        $ticket = Ticket::findOrFail($requestTicket);
        if ($ticket->active == 1) return response()->json(['ticket' => $ticket]);
        $ticket->active = 1;
        $ticket->save();
        return response()->json(['ticket' => $ticket]);
    }
}
