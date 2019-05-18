import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppLampAdjustLuminanceComponent} from './app-lamp-adjust-luminance.component';

describe('AppLampAdjustLuminanceComponent', () => {
  let component: AppLampAdjustLuminanceComponent;
  let fixture: ComponentFixture<AppLampAdjustLuminanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLampAdjustLuminanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLampAdjustLuminanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
