import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalScoreFormInputComponent } from './professional-score-form-input.component';

describe('ProfessionalScoreFormInputComponent', () => {
  let component: ProfessionalScoreFormInputComponent;
  let fixture: ComponentFixture<ProfessionalScoreFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalScoreFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalScoreFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
