import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupDeleteModalComponent } from './evaluation-group-delete-modal.component';

describe('EvaluationGroupDeleteModalComponent', () => {
  let component: EvaluationGroupDeleteModalComponent;
  let fixture: ComponentFixture<EvaluationGroupDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
