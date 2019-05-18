import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampOperateComponent} from './lamp-operate.component';

describe('LampOperateComponent', () => {
  let component: LampOperateComponent;
  let fixture: ComponentFixture<LampOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
