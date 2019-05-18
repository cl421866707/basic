import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OnlineRateDetailComponent} from './online-rate-detail.component';

describe('OnlineRateDetailComponent', () => {
  let component: OnlineRateDetailComponent;
  let fixture: ComponentFixture<OnlineRateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
