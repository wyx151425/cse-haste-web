import { TestBed } from '@angular/core/testing';

import { EvaluationScoreFormsResolverService } from './evaluation-score-forms-resolver.service';

describe('EvaluationScoreFormsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationScoreFormsResolverService = TestBed.get(EvaluationScoreFormsResolverService);
    expect(service).toBeTruthy();
  });
});
