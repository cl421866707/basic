import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppStatisticsInfoComponent} from './app-statistics-info.component';

describe('AppStatisticsInfoComponent', () => {
  let component: AppStatisticsInfoComponent;
  let fixture: ComponentFixture<AppStatisticsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStatisticsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatisticsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
