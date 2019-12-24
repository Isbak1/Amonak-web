import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSalesComponent } from './profil-sales.component';

describe('ProfilSalesComponent', () => {
  let component: ProfilSalesComponent;
  let fixture: ComponentFixture<ProfilSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
