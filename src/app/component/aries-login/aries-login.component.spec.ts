import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesLoginComponent } from './aries-login.component';

describe('AriesLoginComponent', () => {
  let component: AriesLoginComponent;
  let fixture: ComponentFixture<AriesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
