
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live '; 

  constructor(private http: HttpClient) { }

  getRecentMatches(): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com', 
      'x-rapidapi-key': environment.apiKey 
    };

    return this.http.get(this.apiUrl, { headers });
  }
}
