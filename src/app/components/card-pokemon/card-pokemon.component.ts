import { Component, Input, EventEmitter, Output } from '@angular/core';
import typosPokemon from '../../../assets/types.json'

import { moverCardPokemon } from './card-pokemon.animations';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css'],
  animations:[moverCardPokemon]
})
export class CardPokemonComponent{
  estadisticas: any = {};
  mostrarShiny: boolean = false;
  mostrarStats: boolean = false;
  textoBotonShiny: string = "Ver versión shiny";
  textoBotonStats: string = "Ver estadísticas";
  loadingImg: boolean = false;
  animation_moverCard = 'start'
  animation_mostrarStats = 'start'
  fondoPokemon: string = ''
  namePokemon: string = ''



  @Output() actualizarPokemon = new EventEmitter<boolean>();
  @Input() pokemon: any;
  @Input() loading: boolean = true;

  ngOnChanges() {
    if(this.pokemon.id){
      if(this.pokemon.name.includes('-')){
        this.namePokemon = this.pokemon.name.replace('-',' ')
      }else{
        this.namePokemon = this.pokemon.name
      }

      let color1 = '';
      let color2 = '';
     
      for(let i = 0; i < this.pokemon.types.length; i++){
        for(let j=0; j < typosPokemon.length; j++){
          if(this.pokemon.types[i].type.name === typosPokemon[j].type.toLocaleLowerCase()){
            if(this.pokemon.types.length === 1){
              this.fondoPokemon = 'linear-gradient(90deg, '+typosPokemon[j].color+' 0%, '+typosPokemon[j].color+' 100%)'
              break;
            }else{
              if(i==0){
                color1 = ''+typosPokemon[j].color;
              }else{
                color2 = ''+typosPokemon[j].color;
                this.fondoPokemon = 'linear-gradient(90deg, '+color1+' 0%, '+color2+' 100%)'
                break;
              }  
            }
          }
        }
      }
    }
  }

  mostrarEstadisticas(){
    if(!this.mostrarStats){
      this.textoBotonStats = "Ocultar datos";
      this.animation_moverCard = 'end'
      this.animation_mostrarStats = 'end'
      this.mostrarStats = true;
    }else{
      this.textoBotonStats = "Ver estadísticas";
      this.animation_moverCard = 'start'
      this.animation_mostrarStats = 'start'
      this.mostrarStats = false;
    }
  }

  stats() {
    this.estadisticas = this.pokemon.stats;
    this.mostrarEstadisticas();
  }

  shiny() {
    this.mostrarShiny = !this.mostrarShiny; 
    this.textoBotonShiny = this.mostrarShiny ? "Mostrar normal" : "Mostrar shiny";  
  }

  capitalizarPrimeraLetra(texto: string) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
  newPokemon() {
    this.actualizarPokemon.emit();
    if(this.mostrarShiny ){
      this.loadingImg = true;
      this.mostrarShiny = false;
      this.textoBotonShiny = this.mostrarShiny ? "Mostrar normal" : "Mostrar shiny";  
      setTimeout(() => {
        this.loadingImg = false;
      }, 500);
    }
  }
  
}
