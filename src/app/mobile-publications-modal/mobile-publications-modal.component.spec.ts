import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePublicationsModalComponent } from './mobile-publications-modal.component';

describe('MobilePublicationsModalComponent', () => {
  let component: MobilePublicationsModalComponent;
  let fixture: ComponentFixture<MobilePublicationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePublicationsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePublicationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
