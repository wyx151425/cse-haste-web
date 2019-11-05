import { TestBed } from '@angular/core/testing';

import { NotSelectEvaluateesResolverService } from './not-select-evaluatees-resolver.service';

describe('NotSelectEvaluateesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotSelectEvaluateesResolverService = TestBed.get(NotSelectEvaluateesResolverService);
    expect(service).toBeTruthy();
  });
});
