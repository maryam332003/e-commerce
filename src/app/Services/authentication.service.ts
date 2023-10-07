import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if (localStorage.getItem('token')) {
      let token: string | null = localStorage.getItem('token');
      if (token != null) {
        let data = jwtDecode(token);
        console.log(data);
        this.saveUserData(data)

      }
    }
  }
  BaseUrl: string = 'https://ecommerce.routemisr.com';
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  saveUserData(data: any) {
    this.userData.next(data);
  }

  register(data: any): Observable<any> {
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/signup`, data);
  }
  logIn(data: any): Observable<any> {
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/signin`, data);
  }
  logOut(){
    localStorage.removeItem("token")
    this.saveUserData(null)
    this._Router.navigate(['login'])
  }
}
