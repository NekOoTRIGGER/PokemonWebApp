import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { POKEMONS } from '../pokemon/mock-pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
