import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from '../search-results/search-results.service';
import { PodcastEpisode } from '../podcast/PodcastEpisode';
import { EpisodeListService } from './episode-list.service';
import { Podcast } from '../podcast/Podcast';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  constructor(private searchresultsService:SearchResultsService, private episodelistservice:EpisodeListService) { }

  ngOnInit() {
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
}
