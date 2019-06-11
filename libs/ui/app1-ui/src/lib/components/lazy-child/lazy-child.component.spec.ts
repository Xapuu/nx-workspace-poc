/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  let component: LazyChildComponent;
  let fixture: ComponentFixture<LazyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
