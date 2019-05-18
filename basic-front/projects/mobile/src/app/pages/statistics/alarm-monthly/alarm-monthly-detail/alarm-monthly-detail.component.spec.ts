import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlarmMonthlyDetailComponent} from './alarm-monthly-detail.component';

describe('AlarmMonthlyDetailComponent', () => {
  let component: AlarmMonthlyDetailComponent;
  let fixture: ComponentFixture<AlarmMonthlyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmMonthlyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonthlyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
