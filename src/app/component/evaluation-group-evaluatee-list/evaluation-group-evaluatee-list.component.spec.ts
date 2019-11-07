import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupEvaluateeListComponent } from './evaluation-group-evaluatee-list.component';

describe('EvaluationGroupEvaluateeListComponent', () => {
  let component: EvaluationGroupEvaluateeListComponent;
  let fixture: ComponentFixture<EvaluationGroupEvaluateeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupEvaluateeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupEvaluateeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
