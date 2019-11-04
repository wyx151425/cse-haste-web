import { TestBed } from '@angular/core/testing';

import { EvaluationPlanService } from './evaluation-plan.service';

describe('EvaluationPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationPlanService = TestBed.get(EvaluationPlanService);
    expect(service).toBeTruthy();
  });
});
