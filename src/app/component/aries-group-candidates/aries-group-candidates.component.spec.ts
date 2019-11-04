import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesGroupCandidatesComponent } from './aries-group-candidates.component';

describe('AriesGroupCandidatesComponent', () => {
  let component: AriesGroupCandidatesComponent;
  let fixture: ComponentFixture<AriesGroupCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesGroupCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesGroupCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
