import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../user/User';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Podcast } from '../podcast/Podcast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router, private homeService:HomeService) { }

  subscribedPodcasts:Podcast[] = this.homeService.subscribedPodcasts;

  ngOnInit() {
    if(this.loginService.getLoginUser() == null) {
      this.router.navigateByUrl('/');
    }
    this.homeService.getSubscriptions().subscribe(
      data=>{
        this.homeService.setSubscribedPodcasts(data);
      },
      error=>{
        console.log("error retieving subscriptions");
      }
    )
  }

  user:User = this.loginService.getLoginUser();

}
