import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupEvaluatorSelectComponent } from './evaluation-group-evaluator-select.component';

describe('EvaluationGroupEvaluatorSelectComponent', () => {
  let component: EvaluationGroupEvaluatorSelectComponent;
  let fixture: ComponentFixture<EvaluationGroupEvaluatorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupEvaluatorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupEvaluatorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
