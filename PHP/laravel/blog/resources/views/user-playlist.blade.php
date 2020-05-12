@extends('layouts.app')

@section('title-block')Музыка@endsection

@section('content')
    <h1>Музыка</h1>
    
        <form action="{{ route('add-music-playlist-submit', Auth::user()->id) }}" method="post" enctype="multipart/form-data">
            @csrf
                <div class="form-group mt-5 playlist-add-song" 
                    style="display: flex; justify-content: space-between; 
                            border: 3px solid black; border-radius: 10px; 
                            padding: 10px; background-color: thistle;">
                    <label for="music"><b>Добавить музыку</b></label>
                    <input type="file" name="music" id="music">
                    <button type="submit" class="btn btn-success">Добавить</button>
                </div>    
        </form>

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

                            <div class="song-playlist-name col-6">                           
                                <form action="{{ route('rename-audio', $audio->id) }}" method="post">
                                    @csrf
                                    <input style="width: 300px" name="audio-{{ $audio->id }}" type="text" value="{{ $audio->title }}">
                                    <!--<p>{{ $audio->title }}</p>-->
                                    <button type="submit" class="btn btn-primary btn-sm btn-rename-song"><small>Переименовать</small></button>
                                    <a href="{{ route('delete-audio', $audio->id) }}"><button type="button" class="btn btn-danger btn-sm btn-delete-song ml-4"><small>Удалить</small></button></a>                                 
                                </form>
                                
                            </div>
                        </div>
                        
                </div>
            @endforeach
        </div>
@endsection