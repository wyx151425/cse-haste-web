import { TestBed } from '@angular/core/testing';

import { LeaderCadreScoreFormService } from './leader-cadre-score-form.service';

describe('LeaderCadreScoreFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderCadreScoreFormService = TestBed.get(LeaderCadreScoreFormService);
    expect(service).toBeTruthy();
  });
});
