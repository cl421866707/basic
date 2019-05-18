import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightRateComponent} from './light-rate.component';

describe('LightRateComponent', () => {
  let component: LightRateComponent;
  let fixture: ComponentFixture<LightRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
