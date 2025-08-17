import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsDetalhesComponent } from './graphics-detalhes.component';

describe('GraphicsDetalhesComponent', () => {
  let component: GraphicsDetalhesComponent;
  let fixture: ComponentFixture<GraphicsDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
