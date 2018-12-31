import { Injectable } from '@angular/core';
import { Podcast } from '../podcast/Podcast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {

  constructor(private http:HttpClient) { }

  nowPlaying:string = null;

  public loadAudio(url:string) {
    console.log("Step 2: load audio in episodeList service");

    //this.sidebarservice.setNowPlaying(url);
    this.nowPlaying = url;
  }

  public subscribe(podcast:Podcast) {
    return this.http.post('http://localhost:8080/subscribe', podcast)
  }
}
