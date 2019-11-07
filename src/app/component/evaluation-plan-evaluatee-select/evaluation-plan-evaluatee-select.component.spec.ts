import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanEvaluateeSelectComponent } from './evaluation-plan-evaluatee-select.component';

describe('EvaluationPlanEvaluateeSelectComponent', () => {
  let component: EvaluationPlanEvaluateeSelectComponent;
  let fixture: ComponentFixture<EvaluationPlanEvaluateeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanEvaluateeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanEvaluateeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
