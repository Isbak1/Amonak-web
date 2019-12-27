import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowMessagesComponent } from './window-messages.component';

describe('WindowMessagesComponent', () => {
  let component: WindowMessagesComponent;
  let fixture: ComponentFixture<WindowMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
