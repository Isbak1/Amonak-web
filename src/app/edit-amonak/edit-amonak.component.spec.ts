import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmonakComponent } from './edit-amonak.component';

describe('EditAmonakComponent', () => {
  let component: EditAmonakComponent;
  let fixture: ComponentFixture<EditAmonakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAmonakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmonakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
