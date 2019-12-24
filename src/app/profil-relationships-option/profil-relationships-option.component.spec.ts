import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRelationshipsOptionComponent } from './profil-relationships-option.component';

describe('ProfilRelationshipsOptionComponent', () => {
  let component: ProfilRelationshipsOptionComponent;
  let fixture: ComponentFixture<ProfilRelationshipsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRelationshipsOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRelationshipsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
