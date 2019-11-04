import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorScoreFormListComponent } from './evaluator-score-form-list.component';

describe('EvaluatorScoreFormListComponent', () => {
  let component: EvaluatorScoreFormListComponent;
  let fixture: ComponentFixture<EvaluatorScoreFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorScoreFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorScoreFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
