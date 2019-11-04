import { TestBed } from '@angular/core/testing';

import { EvaluateesResolverService } from './evaluatees-resolver.service';

describe('EvaluateesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluateesResolverService = TestBed.get(EvaluateesResolverService);
    expect(service).toBeTruthy();
  });
});
