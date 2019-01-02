import { Injectable } from '@angular/core';
import { Podcast } from '../podcast/Podcast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {

  constructor(private http:HttpClient, private loginService:LoginService) { }

  nowPlaying:string = null;

  public loadAudio(url:string) {
    console.log("Step 2: load audio in episodeList service");

    //this.sidebarservice.setNowPlaying(url);
    this.nowPlaying = url;
  }

  public subscribe(podcast:Podcast):Observable<any> {
    let podcastSubscription = {};
    podcastSubscription['email'] = this.loginService.getLoginUser().email;
    podcastSubscription['collectionName'] = podcast.collectionName;
    podcastSubscription['artworkUrl600'] = podcast.artworkUrl600;
    podcastSubscription['feedUrl'] = podcast.feedUrl;
    return this.http.post('http://localhost:8080/subscribe', podcastSubscription);
  }
}
