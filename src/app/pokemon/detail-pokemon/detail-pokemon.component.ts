import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;

    //Chercher id dans l'url pour trouver le pokemon correspondant.
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId != undefined) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }
}
