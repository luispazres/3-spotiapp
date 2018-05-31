import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  verArtista(item: any){
    let artista_id;

    if (item.type === 'artist') {
        artista_id=item.id;
        this.router.navigate(['/artist', artista_id, "search"]);
    }else{
      artista_id = item.artists[0].id;
      this.router.navigate(['/artist', artista_id, '']);
    }


  }

}
