import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupEvaluatorListComponent } from './evaluation-group-evaluator-list.component';

describe('EvaluationGroupEvaluatorListComponent', () => {
  let component: EvaluationGroupEvaluatorListComponent;
  let fixture: ComponentFixture<EvaluationGroupEvaluatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupEvaluatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupEvaluatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
