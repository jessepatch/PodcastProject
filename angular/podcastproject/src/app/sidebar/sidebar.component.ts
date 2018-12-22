import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { EpisodeListService } from '../episode-list/episode-list.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nowPlaying:string;
  constructor(private sideBarService:SidebarService, private episodeListService:EpisodeListService) {
    this.sideBarService.nowPlaying.subscribe(data => {
      this.loadAudio(data);
    }) 
  }

  

  ngOnInit() {
    

  }
  
  loadAudio(url){
    console.log("Step 3:",url)
    this.nowPlaying = url;
  }

  
}
