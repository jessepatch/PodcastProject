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

  public getDurationHour() {
    let x = '0';
    if (!isNaN(this.audio.duration)) {
      x = Math.floor(this.audio.duration / 3600).toString();
    }
    return x;
  }

  public getDurationMinute() {
    let x = '00';
    if (!isNaN(this.audio.duration)) {
      x = Math.floor((this.audio.duration / 60) % 60).toString().padStart(2, '0');
    }
    return x;
  }

  public getDurationSecond() {
    let x = '00';
    if (!isNaN(this.audio.duration)) {
      x = Math.ceil(this.audio.duration % 60).toString().padStart(2, '0');
    }
    return x;
  }

  public getCurrentTimeHour():number {
    return Math.floor(this.audio.currentTime / 3600);
  }

  public getCurrentTimeMinute() {
    return Math.floor((this.audio.currentTime / 60) % 60).toString().padStart(2, '0');
  }

  public getCurrentTimeSecond() {
    return Math.ceil(this.audio.currentTime % 60).toString().padStart(2, '0');
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
    this.audio.currentTime = this.audio.currentTime - 30;
  }

  public fastForwardTrack() {
    this.audio.currentTime = this.audio.currentTime + 30;
  }

  public getPlaylistArtwork() {
    let x = 'https://ya-webdesign.com/images250_/podcast-icon-png-1.png';
    if(this.currentTrack != null) {
      x = this.currentTrack.playlistArtwork;
    }
    return x;
  }

  public setCurrentTime(value:number) {
    console.log(value);
    console.log(value * this.audio.duration);
    this.audio.currentTime = value * this.audio.duration;
  }

  public getPlaylistPodcastTitle() {
    let x = 'The PodPatch';
    if (this.currentTrack != null) {
      x = this.currentTrack.playlistPodcastTitle;
    }
    return x;
  }

  public getPlaylistEpisodeTitle() {
    let x = 'Web Podcast App';
    if (this.currentTrack != null) {
      x = this.currentTrack.playlistEpisodeTitle;
    }
    return x;
  }

  // public saveTimeListened(timeListened:TimeListened) {
  //   return this.http.post('http://localhost:8080/saveTimeListened', timeListened)
  // }
}
