import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPublicityComponent } from './sell-publicity.component';

describe('SellPublicityComponent', () => {
  let component: SellPublicityComponent;
  let fixture: ComponentFixture<SellPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
