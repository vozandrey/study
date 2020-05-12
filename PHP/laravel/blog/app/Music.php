<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\UploadFile;

class Music extends Model
{
    protected $fillable = [ 'user_id', 'title', 'path', 'created_at', 'updated_at' ];

    public static function saveAudio($audio, $folder)
    {
        $title = $audio->getClientOriginalName(); //полное название песни
        $extension = $audio->getClientOriginalExtension();
        $fullPath = $folder . Auth::user()->id;  // путь куда нужно переместить песню \public\uploads\music\{{ id }}
        
        $hashedAudioName = time() . '_' . hash_file('md5', $audio->getRealPath()) . '.'. $extension;
        $audio->originalName = $hashedAudioName;
       
        $audio->move(base_path() . '/public' .$fullPath, $hashedAudioName); // перемещение песни в public/uploads/music/{{ $id }}
        $newAudio = new Music();
        $newAudio->user_id = Auth::user()->id;
        $newAudio->title = pathinfo($title)['filename'];
        $newAudio->path = $fullPath . '/' . $audio->originalName;
        $newAudio->save();
    }
}
