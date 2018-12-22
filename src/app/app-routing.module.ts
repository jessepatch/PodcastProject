import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'searchresults', component:SearchResultsComponent},
  {path:'episodelist', component:EpisodeListComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
