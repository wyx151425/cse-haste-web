import { TestBed } from '@angular/core/testing';

import { EvaluationPlanEvaluateesResolverService } from './evaluation-plan-evaluatees-resolver.service';

describe('EvaluationPlanEvaluateesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationPlanEvaluateesResolverService = TestBed.get(EvaluationPlanEvaluateesResolverService);
    expect(service).toBeTruthy();
  });
});
