import { Component, Input } from '@angular/core';
import typesPokemons from 'src/assets/types.json'

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.css']
})
export class TypePokemonComponent {
  @Input() tipo: string = "";
  tipoTraducido: string = "";
  color: string = "";

  ngOnInit(){
    this.seleccionarColor();
  }

  seleccionarColor(){
    typesPokemons.forEach((element: any) => {
      if(element.type == this.tipo){
        this.color = element.color;
        this.tipoTraducido = element.name;
      }
    });
  }
  
}
