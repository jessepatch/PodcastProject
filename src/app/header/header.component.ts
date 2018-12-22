import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { User } from '../user/User';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

path:string = 'https://itunes.apple.com/search?entity=podcast&term=';

searchBody:string;

  constructor(private headerService:HeaderService, private router:Router) { }

  ngOnInit() {
  }

  public search() {
    this.headerService.search(this.searchBody).subscribe(
     data => {
      this.headerService.setSearchPodcastsAPI(data);
      console.log(data);
      this.router.navigateByUrl('/searchresults');
     },
     error => {
      
     } 
    )
  }

}
