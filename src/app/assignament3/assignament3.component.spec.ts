import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignament3Component } from './assignament3.component';

describe('Assignament3Component', () => {
  let component: Assignament3Component;
  let fixture: ComponentFixture<Assignament3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignament3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignament3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
