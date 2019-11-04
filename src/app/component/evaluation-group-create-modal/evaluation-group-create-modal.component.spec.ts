import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupCreateModalComponent } from './evaluation-group-create-modal.component';

describe('EvaluationGroupCreateModalComponent', () => {
  let component: EvaluationGroupCreateModalComponent;
  let fixture: ComponentFixture<EvaluationGroupCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
