import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService, private router:Router) { }

  user:User = new User();

  ngOnInit() {
  }

  public login(user:User) {
    this.loginservice.login(this.user).subscribe(
      data=>{
        this.loginservice.setLoginUser(data);
        this.router.navigateByUrl('/home');
      },
      error=>{
        console.log("Username and password do not match");
      }
    )
  }

}
