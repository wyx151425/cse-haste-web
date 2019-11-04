import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesPlanCandidatesComponent } from './aries-plan-candidates.component';

describe('AriesPlanCandidatesComponent', () => {
  let component: AriesPlanCandidatesComponent;
  let fixture: ComponentFixture<AriesPlanCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesPlanCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesPlanCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
