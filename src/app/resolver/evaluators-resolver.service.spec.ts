import { TestBed } from '@angular/core/testing';

import { EvaluatorsResolverService } from './evaluators-resolver.service';

describe('EvaluatorsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluatorsResolverService = TestBed.get(EvaluatorsResolverService);
    expect(service).toBeTruthy();
  });
});
