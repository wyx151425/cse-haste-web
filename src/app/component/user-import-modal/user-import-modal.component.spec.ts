import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImportModalComponent } from './user-import-modal.component';

describe('UserImportModalComponent', () => {
  let component: UserImportModalComponent;
  let fixture: ComponentFixture<UserImportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
