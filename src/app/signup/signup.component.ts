import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { SignupService } from './signup.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();

  constructor(private signupService:SignupService) { }

  ngOnInit() {
  }

  public signupUser() {
    this.signupService.signupUser(this.user).subscribe(
      data => {
        console.log("signup successful");
        console.log(this.user);
            },
      error => {
        console.log("signup unsuccessful");
      }
    )
  }

  public test() {
    this.signupService.test(this.user).subscribe(
      data=> {
        console.log(data);
      },
      error=>{

      }
    )
  }

}
