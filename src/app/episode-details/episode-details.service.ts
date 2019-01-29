import { Injectable } from '@angular/core';
import { PodcastEpisode } from '../podcast/podcastEpisode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsService {

  constructor() { }

  podcastEpisode:PodcastEpisode;
  podcastEpisodeDescription:string;

  public setPodcastEpisode(podcastEpisode:PodcastEpisode) {
    this.podcastEpisode = podcastEpisode;
    this.podcastEpisodeDescription = podcastEpisode.description.replace(/\<p\>/g, '').replace(/\<\/p\>/g, '').replace(/\<br\>/g, '\n');
  }
}
