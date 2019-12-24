import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostOptionComponent } from './edit-post-option.component';

describe('EditPostOptionComponent', () => {
  let component: EditPostOptionComponent;
  let fixture: ComponentFixture<EditPostOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
