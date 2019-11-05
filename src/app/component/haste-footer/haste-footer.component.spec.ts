import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasteFooterComponent } from './haste-footer.component';

describe('HasteFooterComponent', () => {
  let component: HasteFooterComponent;
  let fixture: ComponentFixture<HasteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
