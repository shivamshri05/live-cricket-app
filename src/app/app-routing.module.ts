import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { RecentmatchesComponent } from './recentmatches/recentmatches.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/recent', pathMatch: 'full' },
  { path: 'live', component: MatchListComponent },
  { path: 'recent', component: RecentmatchesComponent },
  { path: 'upcoming', component: UpcomingmatchesComponent },
  {
    path: 'scorecard/:id',
    component: ScorecardComponent
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
