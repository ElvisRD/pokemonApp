import { Component, Input } from '@angular/core';
import { mostrarStats } from './card-stats.animations';


@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.css'],
  animations:[mostrarStats]
})
export class CardStatsComponent {
  @Input() stats: any = [];
  @Input() animation_mostrarStats: string = '';
  @Input() exp: any = 0;

}
