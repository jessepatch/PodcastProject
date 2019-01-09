import { Injectable } from '@angular/core';
import { Podcast } from '../podcast/Podcast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { SearchResultsService } from '../search-results/search-results.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { EpisodeDetailsService } from '../episode-details/episode-details.service';
import { PodcastEpisode } from '../podcast/podcastEpisode';
import { PlaylistTrack } from '../podcast/PlaylistTrack';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {

  constructor(private http:HttpClient, private loginService:LoginService, private searchResultsService:SearchResultsService, private sidebarService:SidebarService) { }

  nowPlaying:string = null;
  podcast:Podcast;
  episodeTitle:string;

  public loadAudio(podcastEpisode:PodcastEpisode) {
    console.log("Step 2: load audio in episodeList service");
    let playlistEpisode = new PlaylistTrack();
    playlistEpisode.playlistArtwork = this.podcast.artworkUrl600;
    playlistEpisode.playlistUrl = podcastEpisode.enclosure.url;
    playlistEpisode.playlistEpisodeTitle = podcastEpisode.title;
    playlistEpisode.playlistPodcastTitle = this.podcast.collectionName;
    this.setPodcast(this.searchResultsService.podcast);
    this.sidebarService.loadAudioPlayer(playlistEpisode);
  }

  public subscribe(podcast:Podcast):Observable<any> {
    let podcastSubscription = {};
    podcastSubscription['email'] = this.loginService.getLoginUser().email;
    podcastSubscription['collectionName'] = podcast.collectionName;
    podcastSubscription['artworkUrl600'] = podcast.artworkUrl600;
    podcastSubscription['feedUrl'] = podcast.feedUrl;
    return this.http.post('http://localhost:8080/subscribe', podcastSubscription);
  }

  public unsubscribe(id:string):Observable<any> {
    return this.http.post('http://localhost:8080/unsubscribe', id);
  }

  public setPodcast(podcast:Podcast) {
    this.podcast = podcast;
  }

  public setEpisodeTitle(episodeTitle:string) {
    this.episodeTitle = episodeTitle;
  }
}
