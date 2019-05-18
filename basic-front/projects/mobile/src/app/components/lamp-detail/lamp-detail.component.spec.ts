import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampDetailComponent} from './lamp-detail.component';

describe('LampDetailComponent', () => {
  let component: LampDetailComponent;
  let fixture: ComponentFixture<LampDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
