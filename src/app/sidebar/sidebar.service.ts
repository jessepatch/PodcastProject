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
    this.audio.volume = 0.5;
    //this.audio.addEventListener('ended', this.playNextSong());
  }

  public getDurationHour():number {
    return Math.floor(this.audio.duration / 3600);
  }

  public getDurationMinute() {
    let x = this.audio.duration;
    while(x > 0) {
      x = x - 3600;
    }
    return Math.floor((x + 3600) / 60).toString().padStart(2, '0');
  }

  public getDurationSecond() {
    let y = this.audio.duration;
    while(y > 0) {
      y = y - 60;
    }
    return Math.ceil(y + 60).toString().padStart(2, '0');
  }

  public getCurrentTimeHour():number {
    return Math.floor(this.audio.currentTime / 3600);
  }

  public getCurrentTimeMinute() {
    let x = this.audio.currentTime;
    while(x > 0) {
      x = x - 3600;
    }
    return Math.floor((x + 3600) / 60).toString().padStart(2, '0');
  }

  public getCurrentTimeSecond() {
    let y = this.audio.currentTime;
    while(y > 0) {
      y = y - 60;
    }
    return Math.ceil(y + 60).toString().padStart(2, '0');
  }

  public addToTrackList() {
    this.audio.audioTracks[0];
  }

  // public playNextSong() {
  //   this.audio.src = 
  // }
}
