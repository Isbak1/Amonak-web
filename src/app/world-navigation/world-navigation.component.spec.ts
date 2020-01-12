import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNavigationComponent } from './world-navigation.component';

describe('WorldNavigationComponent', () => {
  let component: WorldNavigationComponent;
  let fixture: ComponentFixture<WorldNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
