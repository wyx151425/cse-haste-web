import { TestBed } from '@angular/core/testing';

import { LeaderCadreScoreFormResolverService } from './leader-cadre-score-form-resolver.service';

describe('LeaderCadreScoreFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderCadreScoreFormResolverService = TestBed.get(LeaderCadreScoreFormResolverService);
    expect(service).toBeTruthy();
  });
});
