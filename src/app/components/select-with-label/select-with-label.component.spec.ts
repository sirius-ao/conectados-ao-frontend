import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithLabelComponent } from './select-with-label.component';

describe('SelectWithLabelComponent', () => {
  let component: SelectWithLabelComponent;
  let fixture: ComponentFixture<SelectWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWithLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
