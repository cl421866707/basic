import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampActionComponent} from './lamp-action.component';

describe('LampActionInfoComponent', () => {
  let component: LampActionComponent;
  let fixture: ComponentFixture<LampActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
