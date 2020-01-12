import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNotificationsComponent } from './window-notifications.component';

describe('WindowNotificationsComponent', () => {
  let component: WindowNotificationsComponent;
  let fixture: ComponentFixture<WindowNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
