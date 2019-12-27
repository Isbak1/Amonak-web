import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoringPublicationComponent } from './sponsoring-publication.component';

describe('SponsoringPublicationComponent', () => {
  let component: SponsoringPublicationComponent;
  let fixture: ComponentFixture<SponsoringPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoringPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoringPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
