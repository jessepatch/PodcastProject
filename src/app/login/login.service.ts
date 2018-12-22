import { Injectable } from '@angular/core';
import { User } from '../user/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(loginuser:User) {
    return this.http.post<User>('http://8080/login', loginuser);
  }

  public setLoginUser(user:User) {
  }
}
