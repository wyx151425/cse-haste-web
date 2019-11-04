import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanDeleteModalComponent } from './evaluation-plan-delete-modal.component';

describe('EvaluationPlanDeleteModalComponent', () => {
  let component: EvaluationPlanDeleteModalComponent;
  let fixture: ComponentFixture<EvaluationPlanDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
