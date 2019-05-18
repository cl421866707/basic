import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchbarPopupComponent} from './searchbar-popup.component';

describe('SearchbarPopupComponent', () => {
  let component: SearchbarPopupComponent;
  let fixture: ComponentFixture<SearchbarPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
