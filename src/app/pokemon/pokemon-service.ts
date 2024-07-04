import { Injectable } from '@angular/core';
import { POKEMONS } from './mock/mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] | undefined {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }
  
}
