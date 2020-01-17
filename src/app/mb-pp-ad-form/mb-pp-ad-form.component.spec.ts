import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbPpAdFormComponent } from './mb-pp-ad-form.component';

describe('MbPpAdFormComponent', () => {
  let component: MbPpAdFormComponent;
  let fixture: ComponentFixture<MbPpAdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbPpAdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbPpAdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
