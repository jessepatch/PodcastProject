import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from '../search-results/search-results.service';
import { PodcastEpisode } from '../podcast/podcastEpisode';
import { EpisodeListService } from './episode-list.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  constructor(private searchresultsService:SearchResultsService, private episodelistservice:EpisodeListService, private sidebarservice:SidebarService) { }

  ngOnInit() {
  }

  episodeList:PodcastEpisode[] = this.searchresultsService.rssfeed.rss.channel.item;

  @Output() loadAudioPlayer = new EventEmitter();

  public loadAudio(index:number) {
    console.log("Step 1: loadaudio in episodelist component");
    console.log(this.episodeList[index].enclosure.url);

    //this.loadAudioPlayer.emit(this.episodeList[index].enclosure.url);
    this.episodelistservice.loadAudio(this.episodeList[index].enclosure.url);
  }
}
