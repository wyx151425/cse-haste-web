import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesFooterComponent } from './aries-footer.component';

describe('AriesFooterComponent', () => {
  let component: AriesFooterComponent;
  let fixture: ComponentFixture<AriesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
