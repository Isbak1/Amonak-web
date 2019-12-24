import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPersoAffichageComponent } from './profil-perso-affichage.component';

describe('ProfilPersoAffichageComponent', () => {
  let component: ProfilPersoAffichageComponent;
  let fixture: ComponentFixture<ProfilPersoAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPersoAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPersoAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
