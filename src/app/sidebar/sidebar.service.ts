import { Injectable } from '@angular/core';
import { PodcastEpisode } from '../podcast/podcastEpisode';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  audio = new Audio();
  playlist:PodcastEpisode[] = [];
  currentSong:number;

  public loadAudioPlayer(podcastEpisode:PodcastEpisode) {
    if(this.playlist[0] == null) {
      this.audio.src = podcastEpisode.enclosure.url;
      this.audio.volume = 0.5;
      this.currentSong = 0;
    }
    this.playlist.push(podcastEpisode);
    this.audio.addEventListener('ended', this.playNextSong);
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

  public addToPlaylist(podcastEpisode:PodcastEpisode) {
    this.playlist.push(podcastEpisode);
  }

  public removeFromPlaylist(index:number) {
    this.playlist.splice(index, 1);
  }

  public playNextSong() {
    this.currentSong++;
    this.audio.src = this.playlist[this.currentSong].enclosure.url;
    this.audio.load();
    this.audio.play();
  }
}
