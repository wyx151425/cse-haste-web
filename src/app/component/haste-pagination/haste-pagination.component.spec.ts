import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastePaginationComponent } from './haste-pagination.component';

describe('HastePaginationComponent', () => {
  let component: HastePaginationComponent;
  let fixture: ComponentFixture<HastePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
