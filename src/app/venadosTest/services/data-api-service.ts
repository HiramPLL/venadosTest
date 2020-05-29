import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {


  constructor(private http: HttpClient) { }


  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
  });

  getAllGames() {
    let url =`/api/games`
    return this.http.get(url,{ headers: this.headers });    
  }

  getStatistics() {
    let url =`/api/statistics`
    return this.http.get(url,{ headers: this.headers });    
  }

  getPlayers() {
    let url =`/api/players`
    return this.http.get(url,{ headers: this.headers });    
  }

  getSponsors() {
    let url =`/api/sponsors`
    return this.http.get(url,{ headers: this.headers });    
  }

  getNotifications() {
    let url =`/api/notifications`
    return this.http.get(url,{ headers: this.headers });    
  }
}
