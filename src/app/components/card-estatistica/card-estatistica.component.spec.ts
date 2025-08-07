import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstatisticaComponent } from './card-estatistica.component';

describe('CardEstatisticaComponent', () => {
  let component: CardEstatisticaComponent;
  let fixture: ComponentFixture<CardEstatisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEstatisticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstatisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
