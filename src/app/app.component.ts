import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'pokemon-app';
  http = inject(HttpClient);
  numeroAleatorio: number = 0;
  pokemonDatos: any = {};
  isLoading: boolean = true;
  
  ngOnInit() {
    this.obtenerPokemon()
  }

  nuevoPokemon(){
   this.obtenerPokemon()
  }

  obtenerPokemon() {
    this.generarNumeroAleatorio(1, 1010);
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.numeroAleatorio )
    .subscribe((data: any) => {
      this.pokemonDatos = data;
      this.isLoading = false;
      console.log(this.pokemonDatos);    
    });
  }
  
  generarNumeroAleatorio(min: number, max: number) {
    this.numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
}


