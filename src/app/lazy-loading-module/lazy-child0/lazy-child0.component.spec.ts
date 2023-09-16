import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChild0Component } from './lazy-child0.component';

describe('LazyChild0Component', () => {
  let component: LazyChild0Component;
  let fixture: ComponentFixture<LazyChild0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyChild0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChild0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
