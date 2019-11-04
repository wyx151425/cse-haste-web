import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesCandidateAddComponent } from './aries-candidate-add.component';

describe('AriesCandidateAddComponent', () => {
  let component: AriesCandidateAddComponent;
  let fixture: ComponentFixture<AriesCandidateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesCandidateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesCandidateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
