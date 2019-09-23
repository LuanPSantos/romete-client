import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineControlComponent } from './online-control.component';

describe('OnlineControlComponent', () => {
  let component: OnlineControlComponent;
  let fixture: ComponentFixture<OnlineControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
