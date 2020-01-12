import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavbarBottomComponent } from './mobile-navbar-bottom.component';

describe('MobileNavbarBottomComponent', () => {
  let component: MobileNavbarBottomComponent;
  let fixture: ComponentFixture<MobileNavbarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavbarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavbarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
