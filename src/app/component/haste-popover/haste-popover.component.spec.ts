import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastePopoverComponent } from './haste-popover.component';

describe('HastePopoverComponent', () => {
  let component: HastePopoverComponent;
  let fixture: ComponentFixture<HastePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
