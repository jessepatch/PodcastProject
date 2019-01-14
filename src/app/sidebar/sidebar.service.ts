import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { PodcastEpisode } from '../podcast/podcastEpisode';
import { PlaylistTrack } from '../podcast/PlaylistTrack';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService{

  constructor(private http:HttpClient) { }

  audio = new Audio();
  playlist:PlaylistTrack[] = [];
  currentSong:number;
  currentTrack:PlaylistTrack;


  public loadAudioPlayer(podcastEpisode:PlaylistTrack) {
    if(this.playlist[0] == null) {
      this.currentTrack = podcastEpisode;
      this.audio.src = podcastEpisode.playlistUrl;
      this.audio.volume = 0.5;
      this.currentSong = 0;
    }
    this.playlist.push(podcastEpisode);
    this.audio.addEventListener("ended", event=> {
      this.playNextSong();
    })
    this.audio.addEventListener("timeupdate", event=> {

    })
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

  public addToPlaylist(podcastEpisode:PlaylistTrack) {
    this.playlist.push(podcastEpisode);
  }

  public removeFromPlaylist(index:number) {
    this.playlist.splice(index, 1);
  }

  public playNextSong() {
    this.currentSong = this.currentSong + 1;
    this.currentTrack = this.playlist[this.currentSong];
    this.audio.src = this.playlist[this.currentSong].playlistUrl;
    this.audio.load();
    this.audio.play();
  }

  public playPreviousSong() {
    this.currentSong = this.currentSong - 1;
    this.currentTrack = this.playlist[this.currentSong];
    this.audio.src = this.playlist[this.currentSong].playlistUrl;
    this.audio.load();
    this.audio.play();
  }

  public rewindTrack() {
    this.audio.currentTime = this.audio.currentTime - 15;
  }

  public fastForwardTrack() {
    this.audio.currentTime = this.audio.currentTime + 15;
  }

  public saveTimeListened(timeListened:TimeListened) {
    return this.http.post('http://localhost:8080/saveTimeListened', timeListened)
  }
}
