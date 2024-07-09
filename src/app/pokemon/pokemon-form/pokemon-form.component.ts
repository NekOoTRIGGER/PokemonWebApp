import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {
  //Pour utiliser app-pokemon-form je dois passer un pokemon en entré
  @Input() pokemon: Pokemon | undefined;

  types: string[] | undefined;
  constructor(private router: Router, private pokemonService: PokemonService) { }


  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean | undefined {
    return this.pokemon?.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon?.types.push(type);
    }
    else {
      const index = this.pokemon?.types.indexOf(type);
      this.pokemon?.types.splice(this.pokemon?.types.indexOf(type), 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon?.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon?.types.length == 3 && !this.hasType(type)) {
      return false;
    }
    return true
  }

  onSubmit() {
    console.log("Submit Form!");
    this.router.navigate(['/pokemon', this.pokemon?.id]);
  }
}

