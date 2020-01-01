import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAlertFormComponent } from './mobile-alert-form.component';

describe('MobileAlertFormComponent', () => {
  let component: MobileAlertFormComponent;
  let fixture: ComponentFixture<MobileAlertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAlertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAlertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
