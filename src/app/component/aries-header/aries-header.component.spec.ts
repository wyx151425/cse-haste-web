import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesHeaderComponent } from './aries-header.component';

describe('AriesHeaderComponent', () => {
  let component: AriesHeaderComponent;
  let fixture: ComponentFixture<AriesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
