import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlarmDailyComponent} from './alarm-daily.component';

describe('AlarmDailyComponent', () => {
  let component: AlarmDailyComponent;
  let fixture: ComponentFixture<AlarmDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
