import { TestBed } from '@angular/core/testing';

import { GroupScoreFormsResolverService } from './group-score-forms-resolver.service';

describe('GroupScoreFormsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupScoreFormsResolverService = TestBed.get(GroupScoreFormsResolverService);
    expect(service).toBeTruthy();
  });
});
