@extends('layouts.app')

@section('title-block')Музыка@endsection

@section('content')
    <h1>Страница музыки</h1>
    <div class="user-playlist mt-5">
        @foreach ($playlist as $audio)
            <div class="song-playlist mt-2 form-group" 
                style="border: 3px solid black; padding: 10px;
                        border-radius: 30px;">
                    <div class="row">
                        

                        <div class="col-6">
                            <audio class="mt-2" controls>
                                <source src="{{ $audio->path }}">
                            </audio>
                        </div>

                        <div class="col-6">
                            <p>{{ $audio->title }}</p>
                            <p>Загрузил - {{ $audio->user_id }}</p>
                        </div>
  
                    </div>
                    
            </div>
        @endforeach
    </div>
@endsection