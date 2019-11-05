import { TestBed } from '@angular/core/testing';

import { NotSelectEvaluatorsResolverService } from './not-select-evaluators-resolver.service';

describe('NotSelectEvaluatorsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotSelectEvaluatorsResolverService = TestBed.get(NotSelectEvaluatorsResolverService);
    expect(service).toBeTruthy();
  });
});
