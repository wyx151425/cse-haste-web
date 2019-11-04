import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesScoreEditComponent } from './aries-score-edit.component';

describe('AriesScoreEditComponent', () => {
  let component: AriesScoreEditComponent;
  let fixture: ComponentFixture<AriesScoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesScoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesScoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
