import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbPpSellFormComponent } from './mb-pp-sell-form.component';

describe('MbPpSellFormComponent', () => {
  let component: MbPpSellFormComponent;
  let fixture: ComponentFixture<MbPpSellFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbPpSellFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbPpSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
