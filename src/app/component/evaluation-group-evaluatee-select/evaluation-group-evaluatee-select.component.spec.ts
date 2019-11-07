import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupEvaluateeSelectComponent } from './evaluation-group-evaluatee-select.component';

describe('EvaluationGroupEvaluateeSelectComponent', () => {
  let component: EvaluationGroupEvaluateeSelectComponent;
  let fixture: ComponentFixture<EvaluationGroupEvaluateeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupEvaluateeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupEvaluateeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
