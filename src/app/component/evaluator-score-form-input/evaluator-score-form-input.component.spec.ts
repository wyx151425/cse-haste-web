import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorScoreFormInputComponent } from './evaluator-score-form-input.component';

describe('EvaluatorScoreFormInputComponent', () => {
  let component: EvaluatorScoreFormInputComponent;
  let fixture: ComponentFixture<EvaluatorScoreFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorScoreFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorScoreFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
