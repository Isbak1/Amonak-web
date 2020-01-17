import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbPpAlertFormComponent } from './mb-pp-alert-form.component';

describe('MbPpAlertFormComponent', () => {
  let component: MbPpAlertFormComponent;
  let fixture: ComponentFixture<MbPpAlertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbPpAlertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbPpAlertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
