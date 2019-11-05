import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateeSelectListComponent } from './evaluatee-select-list.component';

describe('EvaluateeSelectListComponent', () => {
  let component: EvaluateeSelectListComponent;
  let fixture: ComponentFixture<EvaluateeSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateeSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateeSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
