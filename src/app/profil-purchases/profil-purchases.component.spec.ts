import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPurchasesComponent } from './profil-purchases.component';

describe('ProfilPurchasesComponent', () => {
  let component: ProfilPurchasesComponent;
  let fixture: ComponentFixture<ProfilPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
