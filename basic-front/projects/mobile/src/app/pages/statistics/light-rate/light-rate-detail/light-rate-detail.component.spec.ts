import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightRateDetailComponent} from './light-rate-detail.component';

describe('LightRateDetailComponent', () => {
  let component: LightRateDetailComponent;
  let fixture: ComponentFixture<LightRateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
