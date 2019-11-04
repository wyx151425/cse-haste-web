import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGroupListComponent } from './evaluation-group-list.component';

describe('EvaluationGroupListComponent', () => {
  let component: EvaluationGroupListComponent;
  let fixture: ComponentFixture<EvaluationGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
