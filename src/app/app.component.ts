import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  ngOnInit(): void {
    console.log(this.pokemonList[0]);
  }
  title = 'pokemon-app';
}
