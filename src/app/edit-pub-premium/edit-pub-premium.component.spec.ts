import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPubPremiumComponent } from './edit-pub-premium.component';

describe('EditPubPremiumComponent', () => {
  let component: EditPubPremiumComponent;
  let fixture: ComponentFixture<EditPubPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPubPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPubPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
