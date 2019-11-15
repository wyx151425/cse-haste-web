import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordUpdateModalComponent } from './user-password-update-modal.component';

describe('UserPasswordUpdateModalComponent', () => {
  let component: UserPasswordUpdateModalComponent;
  let fixture: ComponentFixture<UserPasswordUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPasswordUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
