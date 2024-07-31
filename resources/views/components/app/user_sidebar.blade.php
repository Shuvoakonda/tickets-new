<div class="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
    <div class="ec-sidebar-wrap ec-border-box">
        <!-- Sidebar Category Block -->
        <div class="ec-sidebar-block">
            <div class="ec-vendor-block">

                <div class="ec-vendor-block-items">
                    <ul class="sidebar-dashboard">
                        <li class="{{ Route::is('user.dashboard') ? 'active-class' : '' }} mb-4 mt-3"><a
                                href="{{ route('user.dashboard') }}"><i class="fa-solid fa-house fa-1x"></i>
                                Dashboard</a></li>
                        <li class=" {{ Route::is('user.ordersIndex') ? 'active-class' : '' }}"><a
                                href="{{ route('user.ordersIndex') }}"><i class="fa-solid fa-chart-simple fa-1x"></i>
                                Orders</a></li>


                        <li class=" {{ Route::is('user.change_password') ? 'active-class' : '' }}"><a
                                href="{{ route('user.change_password') }}"><i class="fa-solid fa-user"></i>
                                Security</a>
                        </li>
                        <li class="mt-3">
                            <form action="{{ route('logout') }}" id="logoutform" method="post" style="display: inline-block">
                                @csrf
                               
                            </form>
                            <button onclick="document.getElementById('logoutform').submit()" type="submit" class=" user-log"><i class="fa-solid fa-gear"></i>
                                logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
