<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'phone' => 'required|regex:/^\+380\d{9}$/',
            'image' => 'nullable|mimes:png,jpg,jpeg',
        ];
    }

    public function messages()
    {
        return[
            'name.required' => "Поле имя является обязательным",
            'email.required' => "Поле email является обязательным",
            'email.email' => "Поле email должно быть в формате email",
            'phone.required' => "Поле номер телефона является обязательным",
            'phone.regex' => "Поле номер телефона должно быть в формате телефона",
        ];
    }
}
