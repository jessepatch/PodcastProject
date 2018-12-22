import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PodcastProject';

  public loadAudio(url:string) {
    console.log(url);
    console.log("im in app component");
  }
}
