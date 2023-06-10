import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatsComponent } from './card-stats.component';

describe('CardStatsComponent', () => {
  let component: CardStatsComponent;
  let fixture: ComponentFixture<CardStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatsComponent]
    });
    fixture = TestBed.createComponent(CardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
