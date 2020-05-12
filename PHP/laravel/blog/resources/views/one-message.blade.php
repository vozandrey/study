@extends('layouts.app')

@section('title-block'){{ $data->subject }}@endsection

@section('content')
    <h1>Тема сообщения: {{ $data->subject }}</h1>
        <div class="alert alert-info">
            <p>От кого: {{ $data->email }} - {{ $data->name }}</p>
            <p>Сообщение: {{ $data->message }}</p>
            <p><small>Дата создания: {{ $data->created_at }}</small></p>
            <a href="{{ route('contact-update', $data->id) }}"><button class="btn btn-primary">Редактировать</button></a>
            <a href="{{ route('contact-delete', $data->id) }}"><button class="btn btn-danger">Удалить</button></a>
        </div>
@endsection

