import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCadreScoreFormInputComponent } from './department-cadre-score-form-input.component';

describe('DepartmentCadreScoreFormInputComponent', () => {
  let component: DepartmentCadreScoreFormInputComponent;
  let fixture: ComponentFixture<DepartmentCadreScoreFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCadreScoreFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCadreScoreFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
