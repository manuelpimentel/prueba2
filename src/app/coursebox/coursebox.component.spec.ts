/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CourseboxComponent } from './coursebox.component';

describe('CourseboxComponent', () => {
  let component: CourseboxComponent;
  let fixture: ComponentFixture<CourseboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
