import { Component, OnInit } from '@angular/core';
import { EpisodeDetailsService } from './episode-details.service';

@Component({
  selector: 'episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  constructor(private episodeDetailsService:EpisodeDetailsService) { }

  ngOnInit() {
  }

}
