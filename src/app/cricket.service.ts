
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CricketService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': environment.rapidApiHost,
    'x-rapidapi-key': environment.apiKey
  });

  constructor(private http: HttpClient) {}

  getMatchScorecard(matchId: string): Observable<any> {
    console.log('matchId')
    return this.http.get(`${environment.apiUrl}/mcenter/v1/${matchId}/scard`, {
      headers: this.headers
    });
  }
}