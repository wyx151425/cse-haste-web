import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateeDeleteModalComponent } from './evaluatee-delete-modal.component';

describe('EvaluateeDeleteModalComponent', () => {
  let component: EvaluateeDeleteModalComponent;
  let fixture: ComponentFixture<EvaluateeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateeDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
