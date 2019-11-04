import { TestBed } from '@angular/core/testing';

import { EvaluationPlansResolverService } from './evaluation-plans-resolver.service';

describe('EvaluationPlansResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationPlansResolverService = TestBed.get(EvaluationPlansResolverService);
    expect(service).toBeTruthy();
  });
});
