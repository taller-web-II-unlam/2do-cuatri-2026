import { Component, inject } from '@angular/core';
import { PokemonService } from '../../../../api/pokemon/pokemon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  imports: [FormsModule, TitleCasePipe, CommonModule],
  templateUrl: './search-pokemon.html',
  styleUrl: './search-pokemon.css'
})
export class SearchPokemon {

  pokemonName: string = '';
  pokemon: any = null;
  errorMessage: string = '';


  pokemonService = inject(PokemonService);

  // constructor(private pokemonService: PokemonService) { }

  searchPokemon() {
    if (this.pokemonName.trim() === '') return;

    this.pokemonService.getPokemon(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemon = {
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name)
        };
        this.errorMessage = '';
      },
      error: (error) => {
        this.pokemon = null;
        this.errorMessage = 'Pokémon no encontrado';
      },
      complete : ()=>{
        alert("pokemon!!")
      }
    });
  }

}
