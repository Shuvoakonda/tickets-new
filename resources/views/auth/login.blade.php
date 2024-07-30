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
        <div class="col-md-5 mb-20 offset-md-1 p-5"
            style="background-color:#ffff; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <h3 class="text-center">Login</h3>
            
            <form method="post" class="" action="{{ route('login') }}">
                @csrf
                <div class="row">
                    <div class="col-md-12 form-group">
                        <input id="email" type="email" placeholder="{{ __('Email Address') }}"
                            class=" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"
                            required autocomplete="email" autofocus>
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="col-md-12 form-group">
                        <input id="password" type="password" placeholder="{{ __('Password') }}"
                            class="@error('password') is-invalid @enderror" name="password" required
                            autocomplete="current-password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="col-md-12 d-flex justify-content-end">
                        <a href="{{ route('password.request') }}" class="" style="color: #bd3d06">Recover
                            password</a>
                    </div>

                    <div class="col-md-12">
                        <button type="submit" class="butn-dark2 me-3"><span>Login</span></button>
                        <span class="">Don't Have an account ? <a class="text-success"
                                href="{{ route('register') }}">
                                Register</a></span>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('js')
@endsection
