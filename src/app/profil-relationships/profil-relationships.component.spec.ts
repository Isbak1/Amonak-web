import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRelationshipsComponent } from './profil-relationships.component';

describe('ProfilRelationshipsComponent', () => {
  let component: ProfilRelationshipsComponent;
  let fixture: ComponentFixture<ProfilRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
