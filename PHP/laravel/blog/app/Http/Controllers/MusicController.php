<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Music;
use App\Http\Requests\MusicRequest;
use Illuminate\Support\Facades\Auth;

class MusicController extends Controller
{
    public function showPlaylist()
    {
        $playlist = Music::where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC')->get();

        return view('user-playlist', ['playlist' => $playlist]);
    }

    public function addAudio(MusicRequest $request)
    {
        $audio = $request->music;
        if($audio)
        {
            $folder = '/uploads/music/';
            Music::saveAudio($audio, $folder);
        }
        
        return back();
    }

    public function deleteAudio($songId)
    {
        $audio = Music::where('id', $songId)->first();
        if($audio->user_id == Auth::user()->id){
            unlink(base_path('/public' . $audio->path));
            $audio->delete();
        }

        return redirect()->route('show-user-playlist', Auth::user()->id)->with('success', 'Аудиозапись успешно удалена');
    }

    public function renameAudio($songId, Request $request)
    {
        $audio = Music::where('id', $songId)->first();
        $audio->title = $request->input('audio-'.$songId);
        //dd($request->input('audio-'.$songId));
        $audio->save();
        return redirect()->route('show-user-playlist', Auth::user()->id)->with('success', 'Аудиозапись успешно переименована');
    }

    public function showAllMusic()
    {
        $playlist = Music::orderBy('created_at', 'DESC')->get();
        return view('music', ['playlist' => $playlist]);
    }
}
