import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPostComponent } from './profil-post.component';

describe('ProfilPostComponent', () => {
  let component: ProfilPostComponent;
  let fixture: ComponentFixture<ProfilPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
