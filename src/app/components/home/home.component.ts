import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];
  nuevas_canciones: any[] = []
;
  constructor( private http: HttpClient, private _spotify: SpotifyService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp: any) => {
    //       this.paises = resp;
    //       console.log(resp);
    //   })

    this._spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data.albums.items);
        this.nuevas_canciones = data.albums.items;
      });
  }

  ngOnInit() {
  }

}
