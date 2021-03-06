import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { EpisodeListService } from '../episode-list/episode-list.service';
import { LoginService } from '../login/login.service';
import { SearchResultsService } from '../search-results/search-results.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService:LoginService, private episodeListService:EpisodeListService, private sidebarService:SidebarService) {
  }

  ngOnInit() {
    console.log(this.sidebarService.audio.duration);
  }

  // ngOnDestroy() {
  //   this.sidebarService.saveTimeListened(this.sidebarService.audio.played);
  // }
  
  //Custom Audio player begins here
  public loadAudioPlayer(url:string) {
    this.sidebarService.audio.src = url;
    this.sidebarService.audio.load();
  }

  public playAudio() {
    this.sidebarService.audio.play();
  }
  
  public pauseAudio() {
    this.sidebarService.audio.pause();
  }
  public currentTime(time:number) {
    this.sidebarService.audio.currentTime = time;
  }

  public setVolume(volume:number) {
    this.sidebarService.audio.volume = volume;
  }

  public listenHistory() {
    console.log(this.sidebarService.audio.played);
    console.log(this.sidebarService.audio.played.start(0));
    console.log(this.sidebarService.audio.played.end(0));
    console.log(this.sidebarService.audio.played.length);

    for(let i = 0; i < this.sidebarService.audio.played.length; i++) {
      console.log(this.sidebarService.audio.played.end(i));
    }
  }
}
