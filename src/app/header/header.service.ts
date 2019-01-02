import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Podcast, PodcastAPI } from '../podcast/Podcast';
 
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  tempsearchPodcasts:PodcastAPI;
  searchPodcasts:Podcast[]

  constructor(private http:HttpClient) { 
    
  }

  public search(searchBody:string):Observable<PodcastAPI> {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams
    .append('entity', 'podcast')
    .append('term', searchBody);
    return this.http.get<PodcastAPI>('https://itunes.apple.com/search', {params:getParams});
  }

  public setSearchPodcastsAPI(tempsearchPodcasts:PodcastAPI) {
    this.tempsearchPodcasts = tempsearchPodcasts;
  }

}
