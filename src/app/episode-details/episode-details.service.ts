import { Injectable } from '@angular/core';
import { PodcastEpisode } from '../podcast/podcastEpisode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsService {

  constructor() { }

  podcastEpisode:PodcastEpisode;

  public setPodcastEpisode(podcastEpisode:PodcastEpisode) {
    this.podcastEpisode = podcastEpisode;
  }
}
