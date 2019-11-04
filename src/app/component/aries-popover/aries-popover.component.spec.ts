import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesPopoverComponent } from './aries-popover.component';

describe('AriesPopoverComponent', () => {
  let component: AriesPopoverComponent;
  let fixture: ComponentFixture<AriesPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
