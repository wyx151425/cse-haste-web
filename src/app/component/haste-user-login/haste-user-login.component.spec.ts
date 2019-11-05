import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasteUserLoginComponent } from './haste-user-login.component';

describe('HasteUserLoginComponent', () => {
  let component: HasteUserLoginComponent;
  let fixture: ComponentFixture<HasteUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasteUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasteUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
