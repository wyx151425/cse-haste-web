import { TestBed } from '@angular/core/testing';

import { DepartmentCadreScoreFormService } from './department-cadre-score-form.service';

describe('DepartmentCadreScoreFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentCadreScoreFormService = TestBed.get(DepartmentCadreScoreFormService);
    expect(service).toBeTruthy();
  });
});
