import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LuminMonitorComponent} from './lumin-monitor.component';

describe('LuminMonitorComponent', () => {
  let component: LuminMonitorComponent;
  let fixture: ComponentFixture<LuminMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
