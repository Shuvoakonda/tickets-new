@extends('layouts.app')
@section('css')
    <style>
        .login-wrapper {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .navbar .navbar-nav .nav-link {
            color: black;
        }
    </style>
@endsection
@section('content')
    <div class="container login-wrapper">
        <div class="col-md-5 mb-20 offset-md-1 p-5">
            <form method="post" class="" action="{{ route('login') }}">
                @csrf
                <div class="row">
                    <div class="col-md-12 form-group">
                        <div class="i-class">
                            <i class="fa-solid fa-user input-fontawesome"></i>
                            <input class="login-input" id="email" type="email" placeholder="{{ __('words.email') }}"
                                class=" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"
                                required autocomplete="email" autofocus>
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 form-group">
                        <div class="i-class">
                            <i class="fa-solid fa-key input-fontawesome"></i>
                            <input class="login-pass" id="password" type="password" placeholder=" {{ __('words.password') }}"
                                class="@error('password') is-invalid @enderror" name="password" required
                                autocomplete="current-password">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-12">
                        <a href="{{ route('password.request') }}" class=""
                            style="color: #ffffff">{{ __('words.i_forgot_my_password') }}</a>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="login-btn text-white">{{ __('words.login') }}</button>
                    </div>
                    <div class="col-md-12">

                        <span class="">{{ __('words.dont_have_an_account') }} ? <a class="text-warning"
                                href="{{ route('register') }}">
                                {{ __('words.register') }}</a></span>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('js')
@endsection
