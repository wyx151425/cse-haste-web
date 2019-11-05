import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorSelectListComponent } from './evaluator-select-list.component';

describe('EvaluatorSelectListComponent', () => {
  let component: EvaluatorSelectListComponent;
  let fixture: ComponentFixture<EvaluatorSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
