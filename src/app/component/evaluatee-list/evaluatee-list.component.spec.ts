import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateeListComponent } from './evaluatee-list.component';

describe('EvaluateeListComponent', () => {
  let component: EvaluateeListComponent;
  let fixture: ComponentFixture<EvaluateeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
