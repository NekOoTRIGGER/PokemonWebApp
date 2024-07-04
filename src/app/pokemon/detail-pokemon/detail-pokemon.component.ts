import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId != undefined) {
      this.pokemon = this.pokemonList?.find(pokemon => pokemon.id == +pokemonId);
    }
  }
}
