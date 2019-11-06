import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorDeleteModalComponent } from './evaluator-delete-modal.component';

describe('EvaluatorDeleteModalComponent', () => {
  let component: EvaluatorDeleteModalComponent;
  let fixture: ComponentFixture<EvaluatorDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
