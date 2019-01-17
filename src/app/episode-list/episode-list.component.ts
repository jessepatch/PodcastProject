import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from '../search-results/search-results.service';
import { PodcastEpisode } from '../podcast/PodcastEpisode';
import { EpisodeListService } from './episode-list.service';
import { Podcast } from '../podcast/Podcast';
import { HomeService } from '../home/home.service';
import { LoginService } from '../login/login.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { EpisodeDetailsService } from '../episode-details/episode-details.service';
import { Router } from '@angular/router';
import { PlaylistTrack } from '../podcast/PlaylistTrack';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  constructor(private router:Router, private episodeDetailsService:EpisodeDetailsService, private searchresultsService:SearchResultsService, private episodelistservice:EpisodeListService, private homeService:HomeService, private loginService:LoginService, private sidebarService:SidebarService) { }

  ngOnInit() {
    //sets boolean for subscribed
    this.subscribed = false;
    if(this.loginService.getLoginUser() != null) {
      if(this.homeService.subscribedPodcasts != null) {
        for(let i:number = 0; i<this.homeService.subscribedPodcasts.length; i++) {
          if(this.homeService.subscribedPodcasts[i].collectionName == this.podcast.collectionName) {
           this.subscribed = true;
          }
        }
      }
    }
    //Sets boolean for notifications
    if(this.loginService.getLoginUser() != null) {
      if(this.homeService.notificationPodcasts != null) {
        for(let i:number = 0; i<this.homeService.notificationPodcasts.length; i++) {
          if(this.homeService.notificationPodcasts[i].collectionName == this.podcast.collectionName) {
           this.receivingEmailNotification = true;
          }
        }
      }
    }
console.log("listened", this.episodelistservice.listenedPodcasts);
console.log("list", this.episodelistservice.rssfeed.rss.channel.item);
    if(this.episodelistservice.listenedPodcasts != null) {
      for(let i = 0; i < this.episodelistservice.listenedPodcasts.length; i++) {
        for(let j = 0; j < this.episodelistservice.rssfeed.rss.channel.item.length; j++) {
          if(this.episodelistservice.listenedPodcasts[i].title === this.episodelistservice.rssfeed.rss.channel.item[j].title) {
            this.episodelistservice.rssfeed.rss.channel.item[j].listened = true;
            this.episodelistservice.rssfeed.rss.channel.item[j].id = this.episodelistservice.listenedPodcasts[i].id;
          }
        }
      }
    }
  }

  episodeList:PodcastEpisode[] = this.episodelistservice.rssfeed.rss.channel.item;
  podcast:Podcast = this.searchresultsService.podcast;

  subscribed:boolean;
  receivingEmailNotification:boolean;

  public loadAudio(index:number) {
    console.log("Step 1: loadaudio in episodelist component");
    console.log(this.episodeList[index]);
    console.log('podcast', this.episodelistservice.podcast);
    this.episodelistservice.loadAudio(this.episodeList[index]);
    this.episodelistservice.setEpisodeTitle(this.episodeList[index].title);
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
    this.episodelistservice.unsubscribe(this.searchresultsService.podcast.id).subscribe(
      data=>{
        this.subscribed = false;
        console.log("Unsubscribed to podcast");
      },
      error=>{

      }
    )
  }

  public receiveEmailNotification() {
    this.episodelistservice.receiveEmailNotification(this.episodeList[0]).subscribe(
      data=> {
        this.receivingEmailNotification = true;
        console.log("Receiving emails");
      },
      error=> {

      }
    )
  }

  public stopReceivingEmailNotification() {
    this.episodelistservice.stopReceivingEmailNotification().subscribe(
      data=> {
        this.receivingEmailNotification = false;
        console.log("No longer receiving emails");
      },
      error=> {

      }
    )
  }

  public episodeDetails(index:number) {
    this.episodeDetailsService.setPodcastEpisode(this.episodeList[index]);
    this.router.navigateByUrl('/episodedetails');
  }

  public addToPlaylist(index:number) {

    let playlistEpisode = new PlaylistTrack();

    playlistEpisode.playlistArtwork = this.podcast.artworkUrl600;
    playlistEpisode.playlistUrl = this.episodeList[index].enclosure.url;
    playlistEpisode.playlistEpisodeTitle = this.episodeList[index].title;
    playlistEpisode.playlistPodcastTitle = this.podcast.collectionName;

    this.sidebarService.addToPlaylist(playlistEpisode);
  }

  public markListened(index:number) {
    this.episodelistservice.markListened(this.episodeList[index]).subscribe(
      data=>{
        this.episodeList[index].listened = true;
      },
      error=>{

      }
    )
  }

  public unmarkListened(index:number) {
    this.episodelistservice.unmarkListened(this.episodeList[index].id).subscribe(
      data=> {
        this.episodeList[index].listened = false;
      },
      error=> {

      }
    )
  }
}
