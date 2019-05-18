import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditConcentComponent} from './edit-concent.component';

describe('EditConcentComponent', () => {
  let component: EditConcentComponent;
  let fixture: ComponentFixture<EditConcentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConcentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
