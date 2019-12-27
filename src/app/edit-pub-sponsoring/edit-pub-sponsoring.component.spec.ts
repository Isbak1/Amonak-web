import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPubSponsoringComponent } from './edit-pub-sponsoring.component';

describe('EditPubSponsoringComponent', () => {
  let component: EditPubSponsoringComponent;
  let fixture: ComponentFixture<EditPubSponsoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPubSponsoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPubSponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
