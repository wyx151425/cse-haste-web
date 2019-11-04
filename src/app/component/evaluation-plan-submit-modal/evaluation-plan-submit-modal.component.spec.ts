import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanSubmitModalComponent } from './evaluation-plan-submit-modal.component';

describe('EvaluationPlanSubmitModalComponent', () => {
  let component: EvaluationPlanSubmitModalComponent;
  let fixture: ComponentFixture<EvaluationPlanSubmitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanSubmitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanSubmitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
