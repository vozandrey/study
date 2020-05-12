<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal"><a href="{{ route('home') }}">blog</a></h5>
    <nav class="my-2 my-md-0 mr-md-3">

      @guest
          <a class="p-2 text-dark" href="{{ route('login') }}">Логин</a>
      @if (Route::has('register'))
          <a class="p-2 text-dark" href="{{ route('register') }}">Регистрация</a>
      @endif
      @else
          <a id="navbarDropdown" class="p-2 text-dark" href="{{ route('user-profile', Auth::id()) }}">
              {{ Auth::user()->name }} <span class="caret"></span>
          </a>

        <a class="p-2 text-dark" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
            Выход
        </a>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
        
        <a class="p-2 text-dark" href="{{ route('user-chats', Auth::id()) }}">Сообщения</a>
      @endguest


      <a class="p-2 text-dark" href="{{ route('home-page') }}">Главная</a>
      <a class="p-2 text-dark" href="{{ route('show-music') }}">Музыка</a>
      <a class="p-2 text-dark" href="{{ route('contact') }}">Добавить заметку</a>
      <a class="p-2 text-dark" href="{{ route('contact-data') }}">Все заметки</a>

    </nav>
  </div>