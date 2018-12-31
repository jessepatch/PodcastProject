import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../user/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  user:User = this.loginService.getLoginUser();

}
