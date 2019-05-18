import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlarmMonthlyComponent} from './alarm-monthly.component';

describe('AlarmMonthlyComponent', () => {
  let component: AlarmMonthlyComponent;
  let fixture: ComponentFixture<AlarmMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
