<?php

use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('home');
})->name('home-page');



Route::get('/contact', function () {
    return view('contact');
})->name('contact');

Route::post('/contact/submit', 'ContactController@submit')->name('contact-form');
Route::get('/contact/all', 'ContactController@allData')->name('contact-data');
Route::get('/contact/all/{id}', 'ContactController@showOneMessage')->name('contact-data-one');
Route::get('/contact/all/{id}/update', 'ContactController@updateMessage')->name('contact-update');
Route::post('/contact/all/{id}/update', 'ContactController@updateMessageSubmit')->name('contact-update-submit');
Route::get('/contact/all/{id}/delete', 'ContactController@deleteMessage')->name('contact-delete');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/user/{id}', 'UserController@showUser')->name('user-profile');
Route::get('/user/{id}/edit', 'UserController@edit')->name('edit-user-profile');
Route::post('/user/{id}/edit', 'UserController@update')->name('edit-user-profile-submit');
Route::get('/user/{id}/photo/delete', 'UserController@deletePhoto')->name('delete-photo');

Route::get('/user/{id}/music', 'MusicController@showPlaylist')->name('show-user-playlist');
Route::post('/user/{id}/music/update', 'MusicController@addAudio')->name('add-music-playlist-submit');
Route::get('/user/music/{song_id}/delete', 'MusicController@deleteAudio')->name('delete-audio');
Route::post('/user/music/{song_id}/rename', 'MusicController@renameAudio')->name('rename-audio');

Route::get('/user/{id}/chats', 'MessageController@showChats')->name('user-chats');

Route::get('/music', 'MusicController@showAllMusic')->name('show-music');