import { TestBed } from '@angular/core/testing';

import { EvaluationGroupsResolverService } from './evaluation-groups-resolver.service';

describe('EvaluationGroupsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationGroupsResolverService = TestBed.get(EvaluationGroupsResolverService);
    expect(service).toBeTruthy();
  });
});
