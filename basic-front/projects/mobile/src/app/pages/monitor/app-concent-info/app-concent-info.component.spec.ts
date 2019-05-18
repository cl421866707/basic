import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppConcentInfoComponent} from './app-concent-info.component';

describe('AppConcentInfoComponent', () => {
  let component: AppConcentInfoComponent;
  let fixture: ComponentFixture<AppConcentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConcentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConcentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
