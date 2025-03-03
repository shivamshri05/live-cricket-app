import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatchListComponent } from './match-list/match-list.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { HomeComponent } from './home/home.component';
import { RecentmatchesComponent } from './recentmatches/recentmatches.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    ScorecardComponent,
    HomeComponent,
    RecentmatchesComponent,
    UpcomingmatchesComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }