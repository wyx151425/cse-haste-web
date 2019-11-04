import { TestBed } from '@angular/core/testing';

import { EvaluateeService } from './evaluatee.service';

describe('EvaluateeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluateeService = TestBed.get(EvaluateeService);
    expect(service).toBeTruthy();
  });
});
