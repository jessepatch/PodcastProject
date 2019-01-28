import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { AccountCreatedComponent } from './account-created/account-created.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'searchresults', component:SearchResultsComponent},
  {path:'episodelist', component:EpisodeListComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'episodedetails', component:EpisodeDetailsComponent},
  {path:'accountcreated', component:AccountCreatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
