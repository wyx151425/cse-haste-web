import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeDeleteModalComponent } from './judge-delete-modal.component';

describe('JudgeDeleteModalComponent', () => {
  let component: JudgeDeleteModalComponent;
  let fixture: ComponentFixture<JudgeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
