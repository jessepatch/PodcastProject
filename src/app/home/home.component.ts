import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../user/User';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Podcast } from '../podcast/Podcast';
import { SearchResultsService } from '../search-results/search-results.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router, private homeService:HomeService, private searchResultsService:SearchResultsService) { }

  subscribedPodcasts:Podcast[] = this.homeService.subscribedPodcasts;

  ngOnInit() {
    if(this.loginService.getLoginUser() == null) {
      this.router.navigateByUrl('/');
    }
    this.homeService.getSubscriptions().subscribe(
      data=>{
        console.log(data);
        this.homeService.setSubscribedPodcasts(data);
      },
      error=>{
        console.log("error retieving subscriptions");
      }
    )
    console.log('subscribedPodcasts', this.subscribedPodcasts)
  }

  user:User = this.loginService.getLoginUser();

  public episodeList(index:number) {
    this.searchResultsService.episodeList(this.subscribedPodcasts[index].feedUrl).subscribe(
      data => {
        console.log(data);
        this.searchResultsService.setEpisodeList(data);
        this.searchResultsService.setPodcast(this.subscribedPodcasts[index]);
        this.router.navigateByUrl('/episodelist');
       },
       error => {
        
       } 
      )
    }

}
