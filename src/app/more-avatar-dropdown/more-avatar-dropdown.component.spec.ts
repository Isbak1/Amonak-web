import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAvatarDropdownComponent } from './more-avatar-dropdown.component';

describe('MoreAvatarDropdownComponent', () => {
  let component: MoreAvatarDropdownComponent;
  let fixture: ComponentFixture<MoreAvatarDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAvatarDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
