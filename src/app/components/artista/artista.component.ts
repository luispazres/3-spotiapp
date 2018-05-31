import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  from: string;
  loading: boolean;
  top_tracks: any[] = [];

  constructor( private router: ActivatedRoute, private _spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista(params["id"]);
      this.getTopTracks(params["id"]);
      this.from = params['from'];
    })
  }

  ngOnInit() {
  }

  getArtista(id: string){

    this.loading = true;

    this._spotify.getArtista(id)
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
  }

  getTopTracks(id: string){
    this._spotify.getTopTracks(id)
      .subscribe( tracks => {
        console.log(tracks);
        this.top_tracks = tracks;
      })
  }

}
