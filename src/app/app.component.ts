import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pokemonList: Pokemon[] = POKEMONS;
}
