import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPremiumComponent } from './post-premium.component';

describe('PostPremiumComponent', () => {
  let component: PostPremiumComponent;
  let fixture: ComponentFixture<PostPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
