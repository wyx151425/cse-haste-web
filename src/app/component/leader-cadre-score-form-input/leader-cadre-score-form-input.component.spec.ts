import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderCadreScoreFormInputComponent } from './leader-cadre-score-form-input.component';

describe('LeaderCadreScoreFormInputComponent', () => {
  let component: LeaderCadreScoreFormInputComponent;
  let fixture: ComponentFixture<LeaderCadreScoreFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderCadreScoreFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderCadreScoreFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
