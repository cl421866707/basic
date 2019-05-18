import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampTelemetryComponent} from './lamp-telemetry.component';

describe('LampTelemetryInfoComponent', () => {
  let component: LampTelemetryComponent;
  let fixture: ComponentFixture<LampTelemetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampTelemetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
