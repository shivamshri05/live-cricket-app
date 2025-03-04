import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecentmatchapiService {
  RAPIDAPI_KEY:any
  RAPIDAPI_HOST:any
 private apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent/?RAPIDAPI_KEY&RAPIDAPI_HOST'; 

  constructor(private http: HttpClient) { }

  getRecentMatches(): Observable<any> {
    
    const headers = {
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com', 
      'x-rapidapi-key': environment.apiKey 
    };
      console.log(headers);
    return this.http.get(this.apiUrl);
  }
}
