import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LampNetworkComponent} from './lamp-network.component';

describe('LampNetworkInfoComponent', () => {
  let component: LampNetworkComponent;
  let fixture: ComponentFixture<LampNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
