import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from '../search-results/search-results.service';
import { PodcastEpisode } from '../podcast/PodcastEpisode';
import { EpisodeListService } from './episode-list.service';
import { Podcast } from '../podcast/Podcast';
import { HomeService } from '../home/home.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  constructor(private searchresultsService:SearchResultsService, private episodelistservice:EpisodeListService, private homeService:HomeService, private loginService:LoginService) { }

  ngOnInit() {
    this.subscribed = false;
    if(this.loginService.getLoginUser() != null) {
      for(let i:number = 0; i<this.homeService.subscribedPodcasts.length; i++) {
       if(this.homeService.subscribedPodcasts[i].collectionName == this.podcast.collectionName) {
          this.subscribed = true;
        }
      }
    }
  }

  episodeList:PodcastEpisode[] = this.searchresultsService.rssfeed.rss.channel.item;
  podcast:Podcast = this.searchresultsService.podcast;

  //@Output() loadAudioPlayer = new EventEmitter();

  subscribed:boolean;

  public loadAudio(index:number) {
    console.log("Step 1: loadaudio in episodelist component");
    console.log(this.episodeList[index].enclosure.url);

    //this.loadAudioPlayer.emit(this.episodeList[index].enclosure.url);
    this.episodelistservice.loadAudio(this.episodeList[index].enclosure.url);
  }

  public subscribe() {
    this.episodelistservice.subscribe(this.podcast).subscribe(
    data=>{
      this.subscribed = true;
      console.log("Subscribed to podcast");
    },
    error=>{

    }
  )
  }

  public unsubscribe() {
    this.episodelistservice.unsubscribe(this.podcast).subscribe(
      data=>{
        this.subscribed = false;
        console.log("Unsubsribed to podcast");
      },
      error=>{

      }
    )
  }
}
