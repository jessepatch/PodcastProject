import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RssFeed } from '../podcast/podcastEpisode';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private http:HttpClient) {
   }

   rssfeed:RssFeed;

  public episodeList(feedUrl:string):Observable<any> {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams.append('feedUrl', feedUrl);
    return this.http.get<any>('http://localhost:8080/rss/podcast', {params:getParams})
  }

  public setEpisodeList(rssfeed:RssFeed) {
    this.rssfeed = rssfeed;
  }
}
