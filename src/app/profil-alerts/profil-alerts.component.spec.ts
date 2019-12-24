import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAlertsComponent } from './profil-alerts.component';

describe('ProfilAlertsComponent', () => {
  let component: ProfilAlertsComponent;
  let fixture: ComponentFixture<ProfilAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
