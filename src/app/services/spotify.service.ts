import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("Spotify service listo")
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDqcfJ-wpi1W5S0qNMv9fQDMTl85L-_C4tyjesh0xG5E6Y1utGlspDlfmZfPnyVNbFxJkMZkDkV5dEerU4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
