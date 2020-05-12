<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Message;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function showChats($id)
    {
        // $user = Auth::user();

        // $receiver = Message::select('receiver')
        //                 ->where('sender', $user->id);

        // $sender = Message::select('sender')
        //                 ->where('receiver', $user->id)->union($receiver)->get();



        // dd($sender);
        

        // return view('user-chats', ['data' => $messages]);
        return view('user-chats');
    }
}
