import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  user:User = new User();

  ngOnInit() {
  }

  public login(user:User) {
    this.loginservice.login(this.user).subscribe(
      data=>{

      },
      error=>{
        
      }
    )
  }

}
