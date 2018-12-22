import { Injectable } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {

  constructor(private sidebarservice:SidebarService) { }
  nowPlaying:string = null;
  public loadAudio(url:string) {
    console.log("Step 2: load audio in episodeList service");

    //this.sidebarservice.setNowPlaying(url);
    this.nowPlaying = url;
  }
}
