import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonComponent } from './card-pokemon.component';

describe('CardPokemonComponent', () => {
  let component: CardPokemonComponent;
  let fixture: ComponentFixture<CardPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPokemonComponent]
    });
    fixture = TestBed.createComponent(CardPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
