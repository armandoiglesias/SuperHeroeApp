import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  termino:string = "";
  heroes:any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log(param['termino']);
      this.termino = param['termino'];
      this.heroes = this._heroesService.buscarHeroes(param['termino']);
      //console.log(this.heroes);
    })
  }

}
