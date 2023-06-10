import { trigger, state, style, animate, transition } from '@angular/animations';

export const mostrarStats = trigger('mostrarStats',[
  state('start', style({
    transform: 'scale(0.5) translateX(0%)'
  })),
  state('end', style({
    transform: 'scale(1) translateX(52%)'
  })),
  transition('start => end', animate('500ms ease-out')),
  transition('end => start', animate('500ms ease-out'))
])


