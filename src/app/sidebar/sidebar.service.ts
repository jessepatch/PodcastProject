import { Injectable } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { Observable,empty, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  

  nowPlaying = new Subject();
//new Observable((observer) => {
    
//     // observable execution
//     observer.next()
//     observer.complete()
// })
  public setNowPlaying(url:string) {
    console.log("set url into now playing");
    this.nowPlaying.next(url);
  }

  audio = new Audio();

  public loadAudioPlayer(url:string) {
    this.audio.src = url;
  }

  public getDuration():number {
    return this.audio.duration;
  }

  public getCurrentTime():number {
    return this.audio.currentTime;
  }

}
