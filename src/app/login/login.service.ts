import { Injectable } from '@angular/core';
import { User } from '../user/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user:User;

  constructor(private http:HttpClient) { }

  public login(loginUser:User) {
    return this.http.post<User>('http://localhost:8080/login', loginUser);
  }

  public setLoginUser(user:User) {
    this.user = user;
  }

  public getLoginUser() {
    return this.user;
  }

}
