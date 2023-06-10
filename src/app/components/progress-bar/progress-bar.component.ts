import { Component, Input, OnChanges} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  animations: [
    trigger('barAnimation', [
      transition('* => *', [
        animate('{{duration}}', style({ transform: 'translateX({{porcentaje}}%)' }))
      ])
    ])
  ]
})
export class ProgressBarComponent implements OnChanges {   
    @Input() numeroStat: number = 300;
    @Input() color: string = '';
    @Input() atributo: string = '';
    porcentaje: string = '';

    ngOnChanges() {
      if(!this.numeroStat){
        this.numeroStat = 0;
      }
      this.calcularPorcentaje(this.numeroStat);      
      this.seleccionarColor(this.atributo); 
    }
    
    calcularPorcentaje(numeroStat: number) {
      this.porcentaje = ""+(numeroStat/350)*100+"%";
    }

    seleccionarColor(atributo: string) {
      switch (atributo) {
        case 'hp':
          this.color = '#dfecb7';
          this.atributo = 'Vida';
          break;
        case 'attack':
          this.color = '#f27e7e';
          this.atributo = 'Ataque';
          break;
        case 'defense':
          this.color = '#c2b1d4';
          this.atributo = 'Defensa';
          break;
        case 'special-attack':
          this.color = '#a3d8c4';
          this.atributo = 'Ataque especial';
          break;
        case 'special-defense':
          this.color = '#dfb6d6';
          this.atributo = 'Defensa especial';
          break;
        case 'speed':
          this.color = '#8bc6d2';
          this.atributo = 'Velocidad';
          break;
        case 'Experiencia': 
          this.color = '#fdf2ab';
          this.atributo = 'Experiencia';
          break;
        default:
          this.color = 'black';
          break;
      }
    }
    
}

export const percentTranslate = () => {
}



