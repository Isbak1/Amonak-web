import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicitiesComponent } from './edit-publicities.component';

describe('EditPublicitiesComponent', () => {
  let component: EditPublicitiesComponent;
  let fixture: ComponentFixture<EditPublicitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPublicitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPublicitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
