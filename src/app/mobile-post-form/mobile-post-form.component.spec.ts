import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePostFormComponent } from './mobile-post-form.component';

describe('MobilePostFormComponent', () => {
  let component: MobilePostFormComponent;
  let fixture: ComponentFixture<MobilePostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
