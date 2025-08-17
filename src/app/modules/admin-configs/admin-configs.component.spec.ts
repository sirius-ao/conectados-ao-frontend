import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfigsComponent } from './admin-configs.component';

describe('AdminConfigsComponent', () => {
  let component: AdminConfigsComponent;
  let fixture: ComponentFixture<AdminConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConfigsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
