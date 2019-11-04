import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesJudgesManageComponent } from './aries-judges-manage.component';

describe('AriesJudgesManageComponent', () => {
  let component: AriesJudgesManageComponent;
  let fixture: ComponentFixture<AriesJudgesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesJudgesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesJudgesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
