import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../user/User';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Podcast } from '../podcast/Podcast';
import { SearchResultsService } from '../search-results/search-results.service';
import { EpisodeListService } from '../episode-list/episode-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router, private homeService:HomeService, private searchResultsService:SearchResultsService, private episodelistService:EpisodeListService) { }

  user:User = this.loginService.getLoginUser();


  ngOnInit() {
    if(this.loginService.getLoginUser() == null) {
      this.router.navigateByUrl('/');
    }
    this.homeService.getSubscriptions().subscribe(
      data=>{
        console.log(data);
        this.homeService.setSubscribedPodcasts(data);
        console.log('subscribedPodcasts', this.homeService.subscribedPodcasts)

      },
      error=>{
        console.log("error retieving subscriptions");
      }
    )
  }

  public episodeList(index:number) {
    this.searchResultsService.episodeList(this.homeService.subscribedPodcasts[index]).subscribe(
      data => {
        console.log(data);
        this.episodelistService.setEpisodeListPlusListened(data);
        this.searchResultsService.setPodcast(this.homeService.subscribedPodcasts[index]);
        this.episodelistService.setPodcast(this.homeService.subscribedPodcasts[index]);
        console.log('episode list method in home comp', this.homeService.subscribedPodcasts[index]);
        this.router.navigateByUrl('/episodelist');
       },
       error => {
        
       } 
      )
    }

}
