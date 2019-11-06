import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipScoreFormInputComponent } from './leadership-score-form-input.component';

describe('LeadershipScoreFormInputComponent', () => {
  let component: LeadershipScoreFormInputComponent;
  let fixture: ComponentFixture<LeadershipScoreFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipScoreFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipScoreFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
