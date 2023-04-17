import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserdetailsComponent } from './view-userdetails.component';

describe('ViewUserdetailsComponent', () => {
  let component: ViewUserdetailsComponent;
  let fixture: ComponentFixture<ViewUserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
