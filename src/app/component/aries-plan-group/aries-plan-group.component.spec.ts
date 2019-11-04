import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesPlanGroupComponent } from './aries-plan-group.component';

describe('AriesGroupComponent', () => {
  let component: AriesPlanGroupComponent;
  let fixture: ComponentFixture<AriesPlanGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesPlanGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesPlanGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
