import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInboxComponent } from './mobile-inbox.component';

describe('MobileInboxComponent', () => {
  let component: MobileInboxComponent;
  let fixture: ComponentFixture<MobileInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
