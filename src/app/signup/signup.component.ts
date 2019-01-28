import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { SignupService } from './signup.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();

  constructor(private signupService:SignupService, private router:Router) { }

  ngOnInit() {
  }

  public signupUser() {
    this.signupService.signupUser(this.user).subscribe(
      data => {
        console.log("signup successful");
        console.log(this.user);
        this.router.navigateByUrl('/accountcreated');
            },
      error => {
        console.log("signup unsuccessful");
      }
    )
  }


}
