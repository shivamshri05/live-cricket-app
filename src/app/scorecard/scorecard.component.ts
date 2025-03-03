import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricketService } from '../cricket.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

export interface ScorecardResponse {
  scoreCard: Scorecard[];
}

export interface Scorecard {
  matchId: number;
  inningsId: number;
  timeScore: number;
  batTeamDetails: BatTeamDetails;
  bowlTeamDetails: BowlTeamDetails;
  scoreDetails: ScoreDetails;
  extrasData: ExtrasData;
}

export interface BatTeamDetails {
  batTeamId: number;
  batTeamName: string;
  batTeamShortName: string;
  batsmenData: { [key: string]: BatsmanData };
}

export interface BowlTeamDetails {
  bowlTeamId: number;
  bowlTeamName: string;
  bowlTeamShortName: string;
  bowlersData: { [key: string]: BowlerData };
}

export interface BatsmanData {
  batId: number;
  batName: string;
  batShortName: string;
  isCaptain: boolean;
  isKeeper: boolean;
  runs: number;
  balls: number;
  dots: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  outDesc: string;
  wicketCode: string;
}

export interface BowlerData {
  bowlerId: number;
  bowlName: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  wides: number;
  noBalls: number;
  dots: number;
}

export interface ScoreDetails {
  runs: number;
  wickets: number;
  overs: number;
  runRate: number;
}

export interface ExtrasData {
  total: number;
  byes: number;
  legByes: number;
  wides: number;
  noBalls: number;
  penalty: number;
}

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  scorecard: ScorecardResponse | null = null;
  innings: Scorecard[] = [];
  currentInningsIndex: number = 0;
  matchId: string = '';
  batsmenList: BatsmanData[] = [];
  bowlersList: BowlerData[] = [];

  constructor(
    private cricketService: CricketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matchId = params['id'];
      this.loadScorecard(Number(this.matchId));
    });
  }

  loadScorecard(matchId: number) {
    this.cricketService.getMatchScorecard(matchId.toString()).subscribe({
      next: (data: ScorecardResponse) => {
        this.scorecard = data;
        this.innings = data.scoreCard;
        this.updateCurrentInnings(0);
      },
      error: (error) => {
        console.error('Error fetching scorecard:', error);
      }
    });
  }

  updateCurrentInnings(index: number) {
    if (this.innings[index]) {
      this.currentInningsIndex = index;
      this.batsmenList = Object.values(this.innings[index].batTeamDetails.batsmenData);
      this.bowlersList = Object.values(this.innings[index].bowlTeamDetails.bowlersData);
    }
  }

  getCurrentInnings(): Scorecard | null {
    return this.innings[this.currentInningsIndex] || null;
  }

  getBattingTeamName(): string {
    const currentInnings = this.getCurrentInnings();
    return currentInnings ? currentInnings.batTeamDetails.batTeamName : '';
  }

  getExtras(): string {
    const innings = this.getCurrentInnings();
    if (!innings) return '';
    const e = innings.extrasData;
    return `${e.total} (b ${e.byes}, lb ${e.legByes}, w ${e.wides}, nb ${e.noBalls}, p ${e.penalty})`;
  }

  getTotalScore(): string {
    const innings = this.getCurrentInnings();
    if (!innings) return '';
    const s = innings.scoreDetails;
    return `${s.runs}/${s.wickets} (${s.overs} Ov, RR: ${s.runRate.toFixed(2)})`;
  }

  switchInnings() {
    const newIndex = this.currentInningsIndex === 0 ? 1 : 0;
    this.updateCurrentInnings(newIndex);
  }
}