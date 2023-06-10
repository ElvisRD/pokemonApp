import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const moverCardPokemon = trigger("moverCard", [
  state("start", style({
    transform: "translateX(0%)"
  })),
  state("end", style({
    transform: "translateX(-52%)"
  })),
  transition("start => end", animate("500ms ease-out")),
  transition('end => start', animate('500ms ease-out'))
])


