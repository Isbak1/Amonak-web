import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWebComponent } from './message-web.component';

describe('MessageWebComponent', () => {
  let component: MessageWebComponent;
  let fixture: ComponentFixture<MessageWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
