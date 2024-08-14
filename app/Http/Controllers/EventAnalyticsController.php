<?php

namespace App\Http\Controllers;

use App\Charts\EventTicketSellChart;
use App\Charts\OrderSalesByTicketChart;
use App\Charts\OrderSalesChart;
use App\Models\Event;
use App\Models\Order;
use App\Models\Ticket;
use App\Models\User;
use App\Services\EventReport;
use Illuminate\Http\Request;

class EventAnalyticsController extends Controller
{

    public function index(Event $event)
    {
        return view('vendor.voyager.events.analytics', compact('event'));
    }

    public function ticketParticipanReport(
        Event $event,
        EventTicketSellChart $ticketSoldChart
    ) {

        $report = EventReport::generate($event);

        $ticketSoldChart = $ticketSoldChart->build($event);

        return view('vendor.voyager.events.ticket-particiapants-analytics', compact('event', 'report', 'ticketSoldChart'));
    }
    public function salesReport(
        Event $event,
        OrderSalesChart $orderSalesLineChart,
        OrderSalesByTicketChart $orderSalesByTicketPiChart
    ) {
        $lineChart = $orderSalesLineChart->build($event);
        $pieChart = $orderSalesByTicketPiChart->build($event);
        return view('vendor.voyager.events.ticket-sales-analytics', compact('event', 'lineChart', 'pieChart'));
    }
    public function customerReport(Event $event)
    {
        $users = $event->tickets()->distinct('user_id')->pluck('user_id')->map(fn($user) => User::find($user));
        return view('vendor.voyager.events.ticket-customer-report', compact('users', 'event'));
    }

    public function  customerReportOrders(Event $event, User $user,)
    {

        $orders = Order::where('event_id', $event->id)->where('payment_status', 1)->where('user_id', $user->id);
        if (request()->has('search') && request('search') !== '') {
            $search = request('search');
            $orders->where(function ($q) use ($search) {
                $q->where('id', $search);
            });
        }
        $orders = $orders->get();
        return view('vendor.voyager.events.orders', compact('orders', 'event', 'user'));
    }
    public function  customerReportTickets(Event $event, User $user)
    {
        $tickets = Ticket::where('event_id', $event->id)->where('user_id', $user->id);
        if (request()->has('search') && request('search') !== '') {
            $search = request('search');
            $tickets->where(function ($q) use ($search) {
                $q->where('id', $search);
            });
        }
        $tickets = $tickets->get();
        return view('vendor.voyager.events.tickets', compact('tickets', 'event', 'user'));
    }
    public function refund(Order $order)
    {
        if ($order->status == 1) {
            $order->update([
                'status' => 3,
            ]);

            return back()->with([
                'message'    =>"Refund successfully",
                'alert-type' => 'Success',
            ]);
        }else{
            return back()->with([
                'message'    =>"Refund danger",
                'alert-type' => 'error',
            ]);
        }
    }
}
