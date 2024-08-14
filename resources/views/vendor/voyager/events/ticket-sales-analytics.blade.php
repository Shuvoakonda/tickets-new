@extends('voyager::master')

@section('page_title', $event->title . ' analytics')

@section('javascript')
    <script>
        [...document.querySelectorAll("[data-target='#myModal']")].forEach(element => {
            element.addEventListener("click", function(e) {
                document.getElementById('myModalBody').innerHTML = '';
                let data = JSON.parse(e.target.dataset.json);
                let html = `   <h3 class="text-center text-primary">
                        {{ __('words.paid_ticket_and_invite') }}
                    </h3>

                    <hr>
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.participants') }}
                            </h4>
                            <h2>
                                ${data.participants}
                            </h2>
                        </div>
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.checked_in') }}
                            </h4>
                            <h2>
                               ${data.checked_in}
                            </h2>
                        </div>
                        <div class="col-4 text-center">

                            <h4>
                                {{ __('words.returned') }}
                            </h4>
                            <h2>
                               ${data.returned}
                            </h2>
                        </div>
                    </div>
                    <h3 class="text-center text-primary">
                        {{ __('words.paid_ticket') }}
                    </h3>

                    <hr>
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.participants') }}
                            </h4>
                            <h2>
                                 ${data.type.paid.participants}
                            </h2>
                        </div>
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.checked_in') }}
                            </h4>
                            <h2>
                               ${data.type.paid.checked_in}
                            </h2>
                        </div>
                        <div class="col-4 text-center">

                            <h4>
                                {{ __('words.returned') }}
                            </h4>
                            <h2>
                                 ${data.type.paid.returned}
                            </h2>
                        </div>
                    </div>
                    <h3 class="text-center text-primary">
                       {{ __('words.invite_ticket') }}
                    </h3>

                    <hr>
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.participants') }}
                            </h4>
                            <h2>
                                 ${data.type.invite.participants}
                            </h2>
                        </div>
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.checked_in') }}
                            </h4>
                            <h2>
                                ${data.type.invite.checked_in}
                            </h2>
                        </div>
                        <div class="col-4 text-center">

                            <h4>
                                {{ __('words.returned') }}
                            </h4>
                            <h2>
                                ${data.type.invite.returned}
                            </h2>
                        </div>
                    </div>`;

                document.getElementById('myModalBody').innerHTML = html;
                document.getElementById('myModalTitle').innerText = e.target.dataset.title;
                console.log(data);
            })
        });
        [...document.querySelectorAll("[data-target='#myModalType']")].forEach(element => {
            element.addEventListener("click", function(e) {
                document.getElementById('myModalTypeBody').innerHTML = '';
                let data = JSON.parse(e.target.dataset.json);
                let html = `
                
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.participants') }}
                            </h4>
                            <h2>
                                ${data.participants}
                            </h2>
                        </div>
                        <div class="col-md-4 text-center">
                            <h4>
                                {{ __('words.checked_in') }}
                            </h4>
                            <h2>
                               ${data.checked_in}
                            </h2>
                        </div>
                        <div class="col-4 text-center">

                            <h4>
                                {{ __('words.returned') }}
                            </h4>
                            <h2>
                               ${data.returned}
                            </h2>
                        </div>
                    </div>`;

                document.getElementById('myModalTypeBody').innerHTML = html;
                document.getElementById('myModalTypeTitle').innerText = e.target.dataset.title;
                console.log(data);
            })
        });
    </script>
    <script src="{{ $lineChart->cdn() }}"></script>
    <script src="{{ $pieChart->cdn() }}"></script>

    {{ $lineChart->script() }}
    {{ $pieChart->script() }}
@endsection
@section('css')
    <style>
        .card {
            padding: 20px;
            width: 100%;
            border-radius: 10px;
            height: 150px;
            border: 2px solid #000000 !important;
            transition: .2s ease-in;
        }

        .card:hover {
            box-shadow: 5px 5px #000000;
        }

        .card h3 {
            margin: 0px;
            font-size: 30px;
            color: #000;
            font-family: Georgia, 'Times New Roman', Times, serif
        }

        .card h1 {
            text-align: right;
            font-size: 50px;
            color: #000;
        }
    </style>
@endsection
@section('content')

    <div class="container">
        <h3>
            {{ $event->name }} | Financial
        </h3>
        <br>
        <br>
        <div class="panel">
            <div class="panel-body">
                <div class="row mb-3">
                    <div class="col-md-4">
                        <div class="card">
                            <h3>
                                Total Sale
                            </h3>
                            <h1>
                                {{ Sohoj::price($event->tickets->sum('price')) }}
                            </h1>
                        </div>
                    </div>
                    
                    @foreach ($event->tickets->groupBy(function($ticket){
                        return $ticket->product->name;
                    })->map(fn($tickets)=> $tickets->sum('price')) as $key => $price )
                         <div class="col-md-4">
                            <div class="card">
                                <h3>
{{$key}}
                                </h3>
                                <h1>
                                    {{ Sohoj::price($price) }}
                                </h1>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {!! $lineChart->container() !!}

                    </div>
                    <div class="col-md-6">
                        {!! $pieChart->container() !!}

                    </div>
                </div>
            </div>
        </div>


    </div>

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" id="myModalTitle">

                    </h4>
                </div>
                <div class="modal-body" id="myModalBody">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>

    <div class="modal fade" id="myModalType" role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" id="myModalTypeTitle">

                    </h4>
                </div>
                <div class="modal-body" id="myModalTypeBody">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>

    </div>
@endsection