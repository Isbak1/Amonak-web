import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBodyComponent } from './world-body.component';

describe('WorldBodyComponent', () => {
  let component: WorldBodyComponent;
  let fixture: ComponentFixture<WorldBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
