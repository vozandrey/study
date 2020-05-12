@extends('layouts.app')

@section('title-block')Редактировать профиль №{{ $data->id }}@endsection

@section('content')
    <h1>Обновление профиля</h1>

    <form action="{{ route('edit-user-profile-submit', $data->id) }}" method="post" enctype="multipart/form-data">
        @csrf

        <div class="form-group">
            <label for="name">Имя</label>
        <input type="text" name="name" value="{{ $data->name }}" placeholder="Введите имя" id="name" class="form-control">
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" value="{{ $data->email }}" placeholder="Введите email" id="email" class="form-control">
        </div>

        <div class="form-group">
            <label for="phone">Номер телефона</label>
            <input type="text" name="phone" value="{{ $data->phone }}" placeholder="Введите номер телефона" id="phone" class="form-control">
        </div>
               
        <div class="form-group">
            <label for="image">Картинка профиля</label> <br />
            <input type="file" name="avatar" id="image" class="form-control-file">
        </div>
        <br />
        <button type="submit" class="btn btn-success mt-5">Обновить</button>
    </form>

@endsection