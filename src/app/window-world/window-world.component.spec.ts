import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowWorldComponent } from './window-world.component';

describe('WindowWorldComponent', () => {
  let component: WindowWorldComponent;
  let fixture: ComponentFixture<WindowWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
