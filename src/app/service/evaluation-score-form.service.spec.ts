import { TestBed } from '@angular/core/testing';

import { EvaluationScoreFormService } from './evaluation-score-form.service';

describe('EvaluationScoreFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationScoreFormService = TestBed.get(EvaluationScoreFormService);
    expect(service).toBeTruthy();
  });
});
