import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppLampInfoComponent} from './app-lamp-info.component';

describe('AppLampInfoComponent', () => {
  let component: AppLampInfoComponent;
  let fixture: ComponentFixture<AppLampInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLampInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLampInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
