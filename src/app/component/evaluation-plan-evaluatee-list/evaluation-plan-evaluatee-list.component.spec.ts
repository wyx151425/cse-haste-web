import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanEvaluateeListComponent } from './evaluation-plan-evaluatee-list.component';

describe('EvaluationPlanEvaluateeListComponent', () => {
  let component: EvaluationPlanEvaluateeListComponent;
  let fixture: ComponentFixture<EvaluationPlanEvaluateeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanEvaluateeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanEvaluateeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
