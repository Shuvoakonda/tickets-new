@extends('layouts.user_dashboard')

@section('dashboard-content')
    <div class="ec-shop-rightside col-lg-9 col-md-12">
        <div class="card user-name">
            <div class="card-body">
                <span class="user-dash-font"> {{ __('words.hello') }}, {{ Auth::user()->name }}!</span>
            </div>
        </div>
        <div class="ec-vendor-dashboard-card ec-vendor-setting-card">
            <div class="ec-vendor-card-body">
                <h4 class="dashboard-title mb-5"> {{ __('words.change_password') }}</h4>
                <form class="form-horizontal" method="POST" action="{{ route('user.update_password') }}">
                    @csrf
                    <div class="form-group">
                        <label for=""> {{ __('words.current_password') }}</label>

                        <input id="current-password" type="password" class="form-control" name="current_password" required>
                    </div>
                    <div class="form-group">
                        <label for="new_password"> {{ __('words.new_password') }}</label>

                        <input id="new_password" type="password" class="form-control" name="new_password" required>

                    </div>

                    <div class="form-group">
                        <label for="new_password_confirm" class=""> {{ __('words.confirm_new_password') }}</label>
                        <input id="new_password_confirm" type="password" class="form-control"
                            name="new_password_confirmation" required>
                    </div>

                    <div class="form-group mt-3">
                        <button type="submit" class="btn btn-primary">
                            {{ __('words.update_password') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
