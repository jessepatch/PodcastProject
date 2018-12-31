import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Podcast } from '../podcast/Podcast';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  subscribedPodcasts:Podcast[];

  constructor(private http:HttpClient, private loginService:LoginService) { }

  public getSubscriptions():Observable<Podcast[]> {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams.append('email', this.loginService.getLoginUser().email);
    return this.http.get<Podcast[]>('http://localhost:8080/home', {params:getParams});
  }

  public setSubscribedPodcasts(subscribedPodcasts:Podcast[]) {
    this.subscribedPodcasts = subscribedPodcasts;
  }
}
