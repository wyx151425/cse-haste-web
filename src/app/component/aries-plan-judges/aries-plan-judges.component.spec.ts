import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesPlanJudgesComponent } from './aries-plan-judges.component';

describe('AriesPlanJudgesComponent', () => {
  let component: AriesPlanJudgesComponent;
  let fixture: ComponentFixture<AriesPlanJudgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesPlanJudgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesPlanJudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
