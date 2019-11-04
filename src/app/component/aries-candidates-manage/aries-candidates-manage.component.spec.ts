import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesCandidatesManageComponent } from './aries-candidates-manage.component';

describe('AriesCandidatesManageComponent', () => {
  let component: AriesCandidatesManageComponent;
  let fixture: ComponentFixture<AriesCandidatesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesCandidatesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesCandidatesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
