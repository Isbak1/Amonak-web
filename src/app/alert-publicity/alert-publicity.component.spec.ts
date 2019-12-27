import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPublicityComponent } from './alert-publicity.component';

describe('AlertPublicityComponent', () => {
  let component: AlertPublicityComponent;
  let fixture: ComponentFixture<AlertPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
