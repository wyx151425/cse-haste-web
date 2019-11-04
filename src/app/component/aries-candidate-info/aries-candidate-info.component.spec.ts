import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesCandidateInfoComponent } from './aries-candidate-info.component';

describe('AriesCandidateInfoComponent', () => {
  let component: AriesCandidateInfoComponent;
  let fixture: ComponentFixture<AriesCandidateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesCandidateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesCandidateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
