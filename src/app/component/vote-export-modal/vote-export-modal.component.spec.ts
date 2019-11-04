import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteExportModalComponent } from './vote-export-modal.component';

describe('VoteExportModalComponent', () => {
  let component: VoteExportModalComponent;
  let fixture: ComponentFixture<VoteExportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteExportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteExportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
