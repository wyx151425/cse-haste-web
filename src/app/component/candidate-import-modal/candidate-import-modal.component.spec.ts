import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateImportModalComponent } from './candidate-import-modal.component';

describe('CandidateImportModalComponent', () => {
  let component: CandidateImportModalComponent;
  let fixture: ComponentFixture<CandidateImportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateImportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
