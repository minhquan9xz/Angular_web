import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient) { }
  login(body:any){
    return this.http.post('http://localhost:8080/api/user/login', body)
  }
  register(body:any){
    return this.http.post('http://localhost:8080/api/user/register',body)
  }
  isLoggedIn(){
    return false;
  }
}
