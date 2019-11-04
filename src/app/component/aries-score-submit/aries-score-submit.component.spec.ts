import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesScoreSubmitComponent } from './aries-score-submit.component';

describe('AriesScoreSubmitComponent', () => {
  let component: AriesScoreSubmitComponent;
  let fixture: ComponentFixture<AriesScoreSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesScoreSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesScoreSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
