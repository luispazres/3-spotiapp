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
  nuevas_canciones: any[] = [];
  loading : boolean;
  error: boolean;
  menasaje_error: string;

  constructor( private http: HttpClient, private _spotify: SpotifyService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp: any) => {
    //       this.paises = resp;
    //       console.log(resp);
    //   })

    this.loading = true;
    this.error = false;

    this._spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevas_canciones = data;
        this.loading = false;
      }, ( error_servicio) => {
        this.error = true;
        this.loading = false;
        this.menasaje_error = error_servicio.error.error.message;
      });
  }

  traerPaises(){
    this._spotify.getCountries()
      .subscribe((data: any)=>{
        console.log(data);
      });
  }

  ngOnInit() {
  }

}
