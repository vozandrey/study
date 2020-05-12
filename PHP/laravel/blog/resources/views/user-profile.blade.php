@extends('layouts.app')

@section('title-block')Профиль@endsection


@section('content')
    <h2>Профиль №{{ $data->id }}</h2>
    <div class="row">
        <div class="col-4">

            @if ($data->photo != NULL)
                <img src="{{asset( 'uploads/avatars/' . $data->id . '/' . $data->photo) }}" class="img user-profile-photo" alt="User photo">
            @else
                <img src="{{asset( 'uploads/avatars/default/default.jpg') }}" class="img user-profile-photo" alt="Default photo">
            @endif
            

        </div>

        <div class="col-8">
            <p>Имя пользователя - {{ $data->name }}</p>
            <p>Email - {{ $data->email }}</p>
            <p>Телефон -  {{ $data->phone }}</p>
            <p><small>Дата регистрации - {{ $data->created_at }}</small></p>
        </div>
    </div>

    @if (Auth::id() == $data->id)
        @if ($data->photo != NULL)
            <a href="{{ route('delete-photo', Auth::id()) }}"><button class="btn btn-warning mt-3">Удалить фотографию</button></a>
        @endif
        
        <a class="float-right" href="{{ route('edit-user-profile', $data->id) }}"><button class="btn btn-primary mt-5">Редактировать профиль</button></a>
    @endif

    <a class="float-right" href="{{ route('show-user-playlist', $data->id) }}"><button class="btn btn-info mt-5 mr-3">Музыка</button></a>
    
@endsection