<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [ 'receiver', 'sender', 'content', 'created_at', 'updated_at' ];
}
