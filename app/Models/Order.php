<?php

namespace App\Models;

use App\Observers\OrderObserver;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'paid_date' => 'datetime',
        'date_paid' => 'datetime',
        'date_completed' => 'datetime'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    public function total(): Attribute
    {
        return Attribute::make(
            set: fn($value) => $value * 100,
            get: fn($value) => $value / 100
        );
    }
    public function extras(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value)
        );
    }
    public function getExtras()
    {
        return collect($this->extras)->map(function ($extra) {
            $data = Extra::find($extra?->id);
            $data->purchase_quantity =  $extra->qty;
            $data->purchase_price =  $extra->price;
            return $data;
        });
    }
    public function subtotal(): Attribute
    {
        return Attribute::make(
            set: fn($value) => $value * 100,
            get: fn($value) => $value / 100
        );
    }
    public function refundAmount(): Attribute
    {
        return Attribute::make(
            set: fn($value) => $value * 100,
            get: fn($value) => $value / 100
        );
    }

    public function tax(): Attribute
    {
        return Attribute::make(
            set: fn($value) => $value * 100,
            get: fn($value) => $value / 100
        );
    }
    public function billing(): Attribute
    {

        return Attribute::make(
            set: fn($value) => json_encode($value),
            get: fn($value) => json_decode($value)
        );
    }

    public function discount(): Attribute
    {
        return Attribute::make(
            set: fn($value) => $value * 100,
            get: fn($value) => $value / 100
        );
    }

    public function scopeFilter($query)
    {
        $currentWeekStart = Carbon::now()->startOfWeek();
        $currentWeekEnd = Carbon::now()->endOfWeek();

        return $query
            ->when(request('sales') == 2, function ($query) {
                $query->whereYear('created_at', '=', Carbon::now()->year);
            })
            ->when(request('sales') == 3, function ($query) {
                $query->where('created_at', Carbon::now());
            })
            ->when(request('sales') == 1, function ($query) use ($currentWeekStart, $currentWeekEnd) {
                $query->whereBetween('created_at', [$currentWeekStart, $currentWeekEnd]);
            });
    }
    public function scopeCountFilter($query)
    {
        $currentWeekStart = Carbon::now()->startOfWeek();
        $currentWeekEnd = Carbon::now()->endOfWeek();

        return $query
            ->when(request('orders') == 2, function ($query) {
                $query->whereYear('created_at', '=', Carbon::now()->year);
            })
            ->when(request('orders') == 3, function ($query) {
                $query->where('created_at', Carbon::now());
            })
            ->when(request('orders') == 1, function ($query) use ($currentWeekStart, $currentWeekEnd) {
                $query->whereBetween('created_at', [$currentWeekStart, $currentWeekEnd]);
            });
    }


    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function getStatus()
    {
        switch ($this->status) {
            case 0:
                return 'Pending';
            case 1:
                return 'Paid';
            case 2:
                return 'Cancelled';
            case 3:
                return 'Refunded';
            default:
                return 'Pending';
        }
    }

    public function getBsStatusClass()
    {

        switch ($this->status) {
            case 0:
                return 'secondary';
            case 1:
                return 'success';
            case 2:
                return 'danger';
            case 3:
                return 'warning';
            default:
                return 'secondary';
        }
    }
}
