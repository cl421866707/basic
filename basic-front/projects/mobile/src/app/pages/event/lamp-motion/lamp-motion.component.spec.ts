import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampMotionComponent} from './lamp-motion.component';

describe('LampMotionInfoComponent', () => {
  let component: LampMotionComponent;
  let fixture: ComponentFixture<LampMotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampMotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
