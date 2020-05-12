<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required|min:5|max:50',
            'message' => 'required|min:15|max:500',
        ];
    }

    public function attributes()
    {
        return[];
    }

    public function messages()
    {
        return[
            'name.required' => "Поле имя является обязательным",
            'email.required' => "Поле email является обязательным",
            'email.email' => "Поле email должно быть в формате email",
            'subject.required' => "Поле тема является обязательным",
            'subject.min' => "Поле тема должно быть более 5 символов",
            'subject.max' => "Поле тема должно быть менее 50 символов",
            'message.required' => "Поле сообщение является обязательным",
            'message.min' => "Поле сообщение должно быть более 15 символов",
            'message.max' => "Поле сообщение должно быть менее 500 символов",
            
        ];
    }
}
