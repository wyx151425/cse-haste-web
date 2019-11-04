import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanCreateModalComponent } from './evaluation-plan-create-modal.component';

describe('EvaluationPlanCreateModalComponent', () => {
  let component: EvaluationPlanCreateModalComponent;
  let fixture: ComponentFixture<EvaluationPlanCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
