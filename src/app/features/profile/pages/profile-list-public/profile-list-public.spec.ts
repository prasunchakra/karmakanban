import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListPublic } from './profile-list-public';

describe('ProfileListPublic', () => {
  let component: ProfileListPublic;
  let fixture: ComponentFixture<ProfileListPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileListPublic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileListPublic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
