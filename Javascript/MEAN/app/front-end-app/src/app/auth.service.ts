import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;
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

  storeUser(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
    // localStorage.setItem('token', null);
    // localStorage.setItem('user', JSON.stringify(user));
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
}

//.map(res => res.json())
