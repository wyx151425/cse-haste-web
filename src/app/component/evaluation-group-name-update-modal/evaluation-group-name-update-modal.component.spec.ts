import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupNameUpdateModalComponent } from './evaluation-group-name-update-modal.component';

describe('EvaluationGroupNameUpdateModalComponent', () => {
  let component: EvaluationGroupNameUpdateModalComponent;
  let fixture: ComponentFixture<EvaluationGroupNameUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupNameUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupNameUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
