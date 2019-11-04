import { TestBed } from '@angular/core/testing';

import { EvaluatorScoreFormsResolverService } from './evaluator-score-forms-resolver.service';

describe('EvaluatorScoreFormsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluatorScoreFormsResolverService = TestBed.get(EvaluatorScoreFormsResolverService);
    expect(service).toBeTruthy();
  });
});
