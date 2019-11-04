import { TestBed } from '@angular/core/testing';

import { ProfessionalScoreFormService } from './professional-score-form.service';

describe('ProfessionalScoreFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessionalScoreFormService = TestBed.get(ProfessionalScoreFormService);
    expect(service).toBeTruthy();
  });
});
