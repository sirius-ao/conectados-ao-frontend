import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarTabComponent } from './aside-bar-tab.component';

describe('AsideBarTabComponent', () => {
  let component: AsideBarTabComponent;
  let fixture: ComponentFixture<AsideBarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideBarTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
