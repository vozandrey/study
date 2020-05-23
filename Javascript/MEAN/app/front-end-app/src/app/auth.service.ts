import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/reg',
      user,
      { headers: headers }).pipe(map(res => res.json()))
  }

  authUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/auth',
      user,
      { headers: headers }).pipe(map(res => res.json()))
  }
}

//.map(res => res.json())
