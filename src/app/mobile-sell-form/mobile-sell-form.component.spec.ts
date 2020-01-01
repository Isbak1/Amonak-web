import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSellFormComponent } from './mobile-sell-form.component';

describe('MobileSellFormComponent', () => {
  let component: MobileSellFormComponent;
  let fixture: ComponentFixture<MobileSellFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSellFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
