import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupScoreFormListComponent } from './group-score-form-list.component';

describe('GroupScoreFormListComponent', () => {
  let component: GroupScoreFormListComponent;
  let fixture: ComponentFixture<GroupScoreFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupScoreFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupScoreFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
