import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RssFeed, PodcastEpisode } from '../podcast/PodcastEpisode';
import { Podcast } from '../podcast/Podcast';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private http:HttpClient, private loginService:LoginService) {
   }

   rssfeed:RssFeed;
   podcast:Podcast;

   public getEpisodeListFromXML(podcast:Podcast) {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams.append('feedUrl', podcast.feedUrl);
    return this.http.get<any>('http://localhost:8080/rss/podcas', {params:getParams})
  }

  public episodeList(podcast:Podcast):Observable<any> {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams
    .append('feedUrl', podcast.feedUrl)
    .append('collectionName', podcast.collectionName)
    .append('email', this.loginService.getLoginUser().email);
    return this.http.get<any>('http://localhost:8080/rss/podcast', {params:getParams})
  }

  public setPodcast(podcast:Podcast) {
    this.podcast = podcast;
  }
}
