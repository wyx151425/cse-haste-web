import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeImportModalComponent } from './judge-import-modal.component';

describe('JudgeImportModalComponent', () => {
  let component: JudgeImportModalComponent;
  let fixture: ComponentFixture<JudgeImportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeImportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
