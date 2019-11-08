import { TestBed } from '@angular/core/testing';

import { DepartmentCadreScoreFormResolverService } from './department-cadre-score-form-resolver.service';

describe('DepartmentCadreScoreFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentCadreScoreFormResolverService = TestBed.get(DepartmentCadreScoreFormResolverService);
    expect(service).toBeTruthy();
  });
});
