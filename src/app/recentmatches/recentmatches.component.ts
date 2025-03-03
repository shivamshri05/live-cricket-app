import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service'; 
import { RecentmatchapiService } from '../recentmatchapi.service';
export interface MatchResponse {
  typeMatches: TypeMatch[];
}

export interface TypeMatch {
  matchType: string;
  seriesMatches: SeriesMatch[];
}

export interface SeriesMatch {
  seriesAdWrapper: SeriesAdWrapper;
}

export interface SeriesAdWrapper {
  seriesId: number;
  seriesName: string;
  matches: Match[];
}

export interface Match {
  matchInfo: MatchInfo;
  matchScore: MatchScore;
}

export interface MatchInfo {
  matchId: number;
  seriesId: number;
  seriesName: string;
  matchDesc: string;
  matchFormat: string;
  startDate: string;
  state: string;
  status: string;
  team1: Team;
  team2: Team;
  venueInfo: VenueInfo;
}

export interface Team {
  teamId: number;
  teamName: string;
  teamSName: string;
  imageId: number;
}

export interface VenueInfo {
  ground: string;
  city: string;
}

export interface MatchScore {
  team1Score: TeamScore;
  team2Score: TeamScore;
}

export interface TeamScore {
  inngs1: Innings;
}

export interface Innings {
  runs: number;
  wickets: number;
  overs: number;
}

@Component({
  selector: 'app-recentmatches',
  templateUrl: './recentmatches.component.html',
  styleUrls: ['./recentmatches.component.css']
})
export class RecentmatchesComponent implements OnInit {

   scorecard: any;
    matches: TypeMatch[] = [];
    matchTypes: string[] = ['International', 'League', 'Domestic', 'Women'];
    selectedMatchType: string = 'All';
    filteredMatches: SeriesMatch[] = [];
  
    constructor(private apiService: RecentmatchapiService, private cricketService: CricketService) {}
  
    ngOnInit(): void {
      this.fetchRecentMatches();
    }
  
    fetchRecentMatches(): void {
      this.apiService.getRecentMatches().subscribe({
        next: (data: any) => {
          this.matches = data.typeMatches;
          this.filterMatchesByType(this.selectedMatchType);
        },
        error: (error: any) => {
          console.error('Error fetching matches:', error);
        }
      });
    }
  
    filterMatchesByType(type: string): void {
      this.selectedMatchType = type;
      
      if (type === 'All') {
        
        this.filteredMatches = this.matches.flatMap(match => match.seriesMatches);
      } else {
        
        const matchTypeData = this.matches.find(match => match.matchType === type);
        this.filteredMatches = matchTypeData ? matchTypeData.seriesMatches : [];
      }
    }
  
    getAvailableMatchTypes(): string[] {
      return ['All', ...this.matchTypes];
    }
  
    score(matchId: number): void {
      console.log(matchId);
      this.cricketService.getMatchScorecard(matchId.toString()).subscribe({
        next: (data: any) => {
          this.scorecard = data;
          console.log('Match scorecard:', data);
        },
        error: (error) => {
          console.error('Error fetching scorecard:', error);
        }
      });
    }

}
