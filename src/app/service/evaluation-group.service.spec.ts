import { TestBed } from '@angular/core/testing';

import { EvaluationGroupService } from './evaluation-group.service';

describe('EvaluationGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationGroupService = TestBed.get(EvaluationGroupService);
    expect(service).toBeTruthy();
  });
});
