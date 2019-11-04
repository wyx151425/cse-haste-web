import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesCandidateEditComponent } from './aries-candidate-edit.component';

describe('AriesCandidateEditComponent', () => {
  let component: AriesCandidateEditComponent;
  let fixture: ComponentFixture<AriesCandidateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesCandidateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesCandidateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
