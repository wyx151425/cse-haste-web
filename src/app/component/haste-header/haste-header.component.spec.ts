import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasteHeaderComponent } from './haste-header.component';

describe('HasteHeaderComponent', () => {
  let component: HasteHeaderComponent;
  let fixture: ComponentFixture<HasteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
