import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import {MatCardModule} from '@angular/material/card';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { MaterialModule } from '@blox/material';
import { AccountCreatedComponent } from './account-created/account-created.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SignupComponent,
    SearchResultsComponent,
    EpisodeListComponent,
    LoginComponent,
    HomeComponent,
    EpisodeDetailsComponent,
    AccountCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
