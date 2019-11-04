import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationScoreFormListComponent } from './evaluation-score-form-list.component';

describe('EvaluationScoreFormListComponent', () => {
  let component: EvaluationScoreFormListComponent;
  let fixture: ComponentFixture<EvaluationScoreFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationScoreFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationScoreFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
