import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppPoleInfoComponent} from './app-pole-info.component';

describe('AppPoleInfoComponent', () => {
  let component: AppPoleInfoComponent;
  let fixture: ComponentFixture<AppPoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
