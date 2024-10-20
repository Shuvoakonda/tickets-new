<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class OrderSalesByTicketChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build($event): \ArielMejiaDev\LarapexCharts\PieChart
    {
         $data = [
            'Digital'=>$event->digitalTickets->sum('price')/100,
            'Physical'=>$event->physicalTickets->sum('price')/100,
        ];
        return $this->chart->pieChart()
            ->setTitle('Sales report ')
            ->addData(array_values($data))
            ->setLabels(array_keys($data));
    }
}
