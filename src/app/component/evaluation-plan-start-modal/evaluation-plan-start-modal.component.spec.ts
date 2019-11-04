import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanStartModalComponent } from './evaluation-plan-start-modal.component';

describe('EvaluationPlanStartModalComponent', () => {
  let component: EvaluationPlanStartModalComponent;
  let fixture: ComponentFixture<EvaluationPlanStartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanStartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanStartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
