import { Injectable } from '@angular/core';
import { Podcast } from '../podcast/Podcast';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { SearchResultsService } from '../search-results/search-results.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { EpisodeDetailsService } from '../episode-details/episode-details.service';
import { PodcastEpisode, RssFeed } from '../podcast/podcastEpisode';
import { PlaylistTrack } from '../podcast/PlaylistTrack';
import { EpisodeListPlusListened } from '../podcast/EpisodeListPlusListened';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {

  constructor(private http:HttpClient, private loginService:LoginService, private searchResultsService:SearchResultsService, private sidebarService:SidebarService) { }

  episodeListPlusListened:EpisodeListPlusListened;
  nowPlaying:string = null;
  podcast:Podcast;
  episodeTitle:string;
  listenedPodcasts:PodcastEpisode[];
  rssfeed:RssFeed;

  public loadAudio(podcastEpisode:PodcastEpisode) {
    console.log("Step 2: load audio in episodeList service");
    let playlistEpisode = new PlaylistTrack();
    console.log('podcast', this.podcast);
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

  public markListened(podcastEpisode:PodcastEpisode):Observable<any> {
    let podcastListened = {};
    podcastListened['email'] = this.loginService.getLoginUser().email;
    podcastListened['collectionName'] = this.podcast.collectionName;
    podcastListened['title'] = podcastEpisode.title;
    return this.http.post('http://localhost:8080/markListened', podcastListened);
  }

  public unmarkListened(id:string):Observable<any> {
    return this.http.post('http://localhost:8080/unmarkListened', id);
  }

  public setPodcast(podcast:Podcast) {
    this.podcast = podcast;
  }

  public setEpisodeTitle(episodeTitle:string) {
    this.episodeTitle = episodeTitle;
  }

  public setListenedPodcasts(listenedPodcasts:PodcastEpisode[]) {
    this.listenedPodcasts = listenedPodcasts;
  }

  public setEpisodeListPlusListened(episodeListPlusListened:EpisodeListPlusListened) {
    this.episodeListPlusListened = episodeListPlusListened;
    this.rssfeed = episodeListPlusListened.rssfeed;
    console.log("listened setter", episodeListPlusListened.listenedPodcasts);
    this.listenedPodcasts = episodeListPlusListened.listenedPodcasts;
  }

  public setEpisodeList(rssfeed:RssFeed) {
    this.rssfeed = rssfeed;
  }
}
