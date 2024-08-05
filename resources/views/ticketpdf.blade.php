<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your tickets</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <style>
      

        :root {
            --primary-color: #ef5927;
            --secondary-color: #ff990a;
            --dark-color: #221e1f;
        }

        * {

            margin: 0px;
            padding: 0px;
        }

        body {
            font-family: "Montserrat", sans-serif !important;
            margin: 0;
        }

        .container {
            padding: 20px;
            width: 100%;
            margin: 0 auto;
            /* height: 100vh; */
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .content {
            margin: 20px 0;
        }

        /* .footer {
            text-align: center;
            position: absolute;
            bottom: 0;
            width: 100%;
        } */

        table {
            padding: 30px 0px;
            border: 2px solid var(--primary-color);
            width: 90%;
            margin: 20px auto;
        }

        table td {
            padding: 10px;
        }

        .event-date-and-price .date {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .event-date-and-price .country {
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 3px;
            margin-bottom: 20px;
        }

        .event-date-and-price .price {
            font-size: 26px;
            font-weight: 100;

        }

        .event-title {
            border-right: 2px solid var(--primary-color);
            border-left: 2px solid var(--primary-color);
        }


        .text-mian {
            font-weight: 600;
            font-size: 14px;
        }

        .text-sub {
            font-weight: 100;
            font-size: 12px;
        }

        .event-title h1 {
            font-size: 26px;
            text-align: center width: 80%;
            margin-bottom: 15px;
        }

        .event-title h5 {
            font-size: 18px;
        }

        .logo {
            position: relative;
            top: -40px;
            height: 30px;
            width: 60px;
        }

        .event-qr-code img {
            margin-bottom: 10px;
        }

        .content {
            width: 80%;
            margin: 40px auto;
        }

        h2 {
            color: var(--secondary-color);
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 3px solid var(--secondary-color);
        }

        .content ul {
            padding: 10px 40px;
        }

        .content ul li {
            margin-bottom: 8px;
            font-size: 14px;
        }

        .address {

            font-size: 20px;
            font-weight: bold;
        }

        .event-qr-code>p {
            font-size: 14px;
        }

        .print-btn {
            width: 70px;
            height: 70px;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4b41de;
            color: #fff;
            border: none;
            border-radius: 10px;
            transition: box-shadow .2s ease-in;
        }

        .print-btn:hover {
            box-shadow: 5px 5px 0px #221e1f;
        }

        @media print {

            /* Hide the print button during print */
            .print-btn {
                display: none;
            }

            /* Example of other print-specific styles */
            .container {
                height: 100vh;
            }
        }
    </style>
    <script>
        // This function triggers the print dialog
        function autoPrint() {
            window.print();
        }

        // Attach the autoPrint function to the window load event
        window.onload = autoPrint;
    </script>

</head>

<body>
    @foreach ($tickets as $ticket)
        <div class="container">
            <div class="header">
                <div>
                    <table>
                        <tr>
                            <td style="width: 25%">
                                <div class="event-date-and-price">
                                    <p class="date">{{ $ticket->product->start_date->format('M d, Y') }}</p>
                                    <p class="country">{{ $ticket->event->city }}</p>
                                    <p class="price">{{ Sohoj::price($ticket->price) }}</p>
                                    <p class="text-main">
                                        Final Price
                                    </p>
                                    <p class="text-sub">
                                        Tax Included
                                    </p>
                                </div>
                            </td>
                            <td style="width: 50%">
                                <div class="event-title">
                                    <img class="logo" height="30" width="60"
                                        src="{{ asset('assets/logo-black.png') }}" alt="">
                                    <h1>{{ $ticket->event->name }}</h1>
                                    <h5>{{ $ticket->product->name }}</h5>
                                </div>
                            </td>
                            <td style="width: 25%">
                                <div class="event-qr-code">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data={{ $ticket->ticket }}&color=ef5927"
                                        alt="" height="120" width="120">
                                    <p>{{ $ticket->ticket }}</p>
                                </div>
                            </td>
                        </tr>
                    </table>



                </div>
            </div>
            <div class="content">
                <h2>
                    CONDIÇÕES GERAIS
                </h2>
                <ul>
                    <li>
                        O bilhete de acesso é individual e corresponde a uma entrada.
                    </li>
                    <li>
                        O bilhete de acesso confere um copo oficial do evento.
                    </li>
                    <li>
                        O processo de cancelamento ou devolução é tratado caso a caso pela Essência Company. O
                        pedido deverá chegar por escrito para o e-mail de contacto tickets@essenciacompany.com,
                        até 14 dias após a encomenda, sendo as instruções de cancelamento ou devolução do valor
                        pago respondidas e definidas pela EMPRESA, pelo mesmo meio de comunicação.
                    </li>
                    <li>
                        Não é permitida a entrada de pessoas acompanhadas de animais excepto nos casos
                        previstos por lei.
                    </li>
                    <li>
                        Não é permitida a entrada de pessoas munidas de objetos perigosos.
                    </li>
                    <li>
                        Não é permitido o consumo de bebidas alcoólicas por menores de 18 anos e a todos os que
                        apresentarem sinais de embrieguez ou de aparente anomalia psíquica.
                    </li>
                    <li>
                        Na sua qualidade de organizadora do evento, a Essência Company reserva-se o direito de
                        recusar a entrada e/ou expulsar qualquer pessoa que apresente comportamento indevido e
                        inapropriado, prejudicando o bom funcionamento do evento e/ou causando um risco à
                        segurança de outros participantes. Aqui se inclui, mas não se limita a, comportamento
                        agressivo, uso de drogas ilegais ou porte de objetos perigosos.
                    </li>
                    <li>
                        A organização reserva-se no direito de alterar o programa sem aviso prévio.
                    </li>
                    <li>
                        Existência do livro de reclamações – O Decreto-lei nº 156/2005, de 15 de Setembro, alterado
                        pelos Decretos-Lei nº 371/2007 de 06 de Novembro nº 118/2009 de 19 de Maio
                    </li>
                    <li>
                        Existência de tabela de preços.
                    </li>

                </ul>
                <br>
                <br>
                <h2>
                    ADDRESS
                </h2>
                <p class="address">Centro de Congressos de Lisboa
                    <br>
                    Rua António Carneiro, 185, Lisboa
                </p>

            </div>

        </div>
    @endforeach

    <button class="print-btn" onclick="autoPrint()">
        Print
    </button>
</body>

</html>