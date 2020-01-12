import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublicityComponent } from './post-publicity.component';

describe('PostPublicityComponent', () => {
  let component: PostPublicityComponent;
  let fixture: ComponentFixture<PostPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
