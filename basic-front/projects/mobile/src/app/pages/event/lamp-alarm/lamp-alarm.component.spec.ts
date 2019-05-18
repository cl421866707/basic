import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampAlarmComponent} from './lamp-alarm.component';

describe('LampAlarmInfoComponent', () => {
  let component: LampAlarmComponent;
  let fixture: ComponentFixture<LampAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
