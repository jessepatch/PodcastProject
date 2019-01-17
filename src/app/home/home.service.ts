import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Podcast } from '../podcast/Podcast';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { NotificationAndSubscribedList, NotificationPodcast } from '../podcast/NotificationAndSubscribedList';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  notificationAndSubscribedList:NotificationAndSubscribedList;
  subscribedPodcasts:Podcast[];
  notificationPodcasts:NotificationPodcast[];

  constructor(private http:HttpClient, private loginService:LoginService) { }

  public getSubscriptions():Observable<NotificationAndSubscribedList> {
    let getParams:HttpParams = new HttpParams();
    getParams = getParams.append('email', this.loginService.getLoginUser().email);
    return this.http.get<NotificationAndSubscribedList>('http://localhost:8080/home', {params:getParams});
  }

  public setSubscribedPodcasts(subscribedPodcasts:Podcast[]) {
    this.subscribedPodcasts = subscribedPodcasts;
  }

  public setNotificationAndSubscribedList(notificationAndSubscribedList:NotificationAndSubscribedList) {
    this.notificationPodcasts = notificationAndSubscribedList.notificationPodcasts;
    this.subscribedPodcasts = notificationAndSubscribedList.subscribedPodcasts;
  }
}
