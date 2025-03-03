
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {env } from '../environments/env';



@Injectable({
  providedIn: 'root'
})
export class CricketService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': env.rapidApiHost,
    'x-rapidapi-key': env.apiKey
  });

  constructor(private http: HttpClient) {}

  getMatchScorecard(matchId: string): Observable<any> {
    console.log('matchId')
    return this.http.get(`${env.apiUrl}/mcenter/v1/${matchId}/scard`, {
      headers: this.headers
    });
  }
}