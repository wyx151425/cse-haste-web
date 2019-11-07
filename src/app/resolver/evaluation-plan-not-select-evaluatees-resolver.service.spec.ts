import { TestBed } from '@angular/core/testing';

import { EvaluationPlanNotSelectEvaluateesResolverService } from './evaluation-plan-not-select-evaluatees-resolver.service';

describe('EvaluationPlanNotSelectEvaluateesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationPlanNotSelectEvaluateesResolverService = TestBed.get(EvaluationPlanNotSelectEvaluateesResolverService);
    expect(service).toBeTruthy();
  });
});
