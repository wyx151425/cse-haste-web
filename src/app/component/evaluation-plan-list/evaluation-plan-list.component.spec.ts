import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPlanListComponent } from './evaluation-plan-list.component';

describe('EvaluationPlanListComponent', () => {
  let component: EvaluationPlanListComponent;
  let fixture: ComponentFixture<EvaluationPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
