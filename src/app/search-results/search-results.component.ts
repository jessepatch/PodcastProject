import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Podcast, PodcastAPI } from '../podcast/Podcast';
import { Router } from '@angular/router';
import { SearchResultsService } from './search-results.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private headerService:HeaderService, private searchresultsService:SearchResultsService, private router:Router) { }

  ngOnInit() {
  }

  tempsearchPodcasts:PodcastAPI = this.headerService.tempsearchPodcasts;
  searchPodcasts:Podcast[] = this.headerService.tempsearchPodcasts.results;

  public episodeList(index:number) {
    this.searchresultsService.episodeList(this.searchPodcasts[index].feedUrl).subscribe(
      data => {
        console.log(data);
        this.searchresultsService.setEpisodeList(data);
        this.router.navigateByUrl('/episodelist');
       },
       error => {
        
       } 
      )
    }
  }
