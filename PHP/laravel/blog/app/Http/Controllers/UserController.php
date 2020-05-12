<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function showUser($id)
    {
        $users = new User();

        return view('user-profile', ['data' => $users->find($id)]);
    }

    public function edit($id)
    {
        $user = new User();

        return view('edit-user-profile', ['data' => $user->find($id)]);
    }

    public function update($id, UserRequest $request)
    {
        $user = User::find($id);

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');

        if($request->avatar)
        {
            if ($user->photo != NULL)      // если есть загруженная фотография - удалить её
            {
                unlink(base_path('\public\uploads\avatars\\' . $id . "\\" . $user->photo));
            }
            
            $path = base_path() . '\public\uploads\avatars\\' . $id;  // путь куда нужно переместить картинку C:\OSPanel\domains\blog\public\uploads\music\{{ id }}
            $originalName = $request->avatar->getClientOriginalName(); // получение названия картинки
            $request->avatar->move($path, $originalName); // перемещение картинки в public/uploads/music/{{ $id }}

            $user->photo = $originalName;   // Запись названия картинки в таблицу Users 
        }

        $user->save();

        return redirect()->route('user-profile', $id)->with('success', 'Профиль был обновлен');
    }

    public function deletePhoto($id)
    {
        $user = User::find($id);

        unlink(base_path('\public\uploads\avatars\\' . $id . "\\" . $user->photo));
        $user->photo = NULL;
        $user->save();

        return back();
    }
}
