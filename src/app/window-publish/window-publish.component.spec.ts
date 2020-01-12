import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPublishComponent } from './window-publish.component';

describe('WindowPublishComponent', () => {
  let component: WindowPublishComponent;
  let fixture: ComponentFixture<WindowPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
