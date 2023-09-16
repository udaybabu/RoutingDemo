import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerChild0Component } from './eager-child0.component';

describe('EagerChild0Component', () => {
  let component: EagerChild0Component;
  let fixture: ComponentFixture<EagerChild0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerChild0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerChild0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
