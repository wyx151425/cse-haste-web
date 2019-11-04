import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesIndexComponent } from './aries-index.component';

describe('AriesIndexComponent', () => {
  let component: AriesIndexComponent;
  let fixture: ComponentFixture<AriesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
