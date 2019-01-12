import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Podcast, PodcastAPI } from '../podcast/Podcast';
import { Router } from '@angular/router';
import { SearchResultsService } from './search-results.service';
import { EpisodeListService } from '../episode-list/episode-list.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private episodeListService:EpisodeListService, private headerService:HeaderService, private searchresultsService:SearchResultsService, private router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  tempsearchPodcasts:PodcastAPI = this.headerService.tempsearchPodcasts;
  searchPodcasts:Podcast[] = this.headerService.tempsearchPodcasts.results;

  public episodeList(index:number) {
    if(this.loginService.getLoginUser != null) {
    this.searchresultsService.episodeList(this.searchPodcasts[index]).subscribe(
      data => {
        console.log(data);
        this.episodeListService.setEpisodeListPlusListened(data);
        this.episodeListService.setPodcast(this.searchPodcasts[index]);
        this.searchresultsService.setPodcast(this.searchPodcasts[index]);
        this.router.navigateByUrl('/episodelist');
       },
       error => {
        
       } 
       
      )
    }
    else {
      this.searchresultsService.getEpisodeListFromXML(this.searchPodcasts[index]).subscribe(
        data=> {
          console.log(data);
          this.episodeListService.setEpisodeList(data);
          this.episodeListService.setPodcast(this.searchPodcasts[index]);
          this.searchresultsService.setPodcast(this.searchPodcasts[index]);
          this.router.navigateByUrl('/episodelist');
        },
        error=> {

        }
      )
    }
  }
}
