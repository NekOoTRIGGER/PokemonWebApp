import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon-service.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList?: Pokemon[] = this.pokemonService.getPokemonList();

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ){}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/', this.pokemonService.getPokemonById(pokemon.id)?.id])
  }
}
