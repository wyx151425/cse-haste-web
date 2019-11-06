import { TestBed } from '@angular/core/testing';

import { ProfessionalScoreFormResolverService } from './professional-score-form-resolver.service';

describe('ProfessionalScoreFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessionalScoreFormResolverService = TestBed.get(ProfessionalScoreFormResolverService);
    expect(service).toBeTruthy();
  });
});
