import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketTableContentComponent } from './docket-table-content.component';

describe('DocketTableContentComponent', () => {
  let component: DocketTableContentComponent;
  let fixture: ComponentFixture<DocketTableContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocketTableContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocketTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
