import { TestBed } from '@angular/core/testing';

import { LeadershipScoreFormResolverService } from './leadership-score-form-resolver.service';

describe('LeadershipScoreFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadershipScoreFormResolverService = TestBed.get(LeadershipScoreFormResolverService);
    expect(service).toBeTruthy();
  });
});
