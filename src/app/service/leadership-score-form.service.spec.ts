import { TestBed } from '@angular/core/testing';

import { LeadershipScoreFormService } from './leadership-score-form.service';

describe('LeadershipScoreFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadershipScoreFormService = TestBed.get(LeadershipScoreFormService);
    expect(service).toBeTruthy();
  });
});
