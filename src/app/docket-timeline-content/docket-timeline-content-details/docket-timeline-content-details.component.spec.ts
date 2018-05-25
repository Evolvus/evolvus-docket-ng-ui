import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketTimelineContentDetailsComponent } from './docket-timeline-content-details.component';

describe('DocketTimelineContentDetailsComponent', () => {
  let component: DocketTimelineContentDetailsComponent;
  let fixture: ComponentFixture<DocketTimelineContentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocketTimelineContentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocketTimelineContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
