import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DocketTableModel } from '../../shared/docket-table-model';
import { Http, Response } from '@angular/http';
import { DocketSideFilterSelectModel } from '../../shared/docket-side-filter-select.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SideNavFormContentService } from '../../docket-side-navigation/docket-side-nav-form-content.service';
import { DocketSession } from '../../shared/docket-session-model';
import { MatDialog } from '@angular/material';
import { DocketTimelineContentDetailsComponent } from '../docket-timeline-content-details/docket-timeline-content-details.component';

@Component({
  selector: 'app-docket-table-content',
  templateUrl: './docket-table-content.component.html',
  styleUrls: ['./docket-table-content.component.css']
})
export class DocketTableContentComponent {


  constructor(private http: Http, private sideNavService: SideNavFormContentService, public matDialog: MatDialog) {

  }


  docketTableDataList: DocketTableModel[] = [];
  displayedColumns = ['application', 'name', 'source', 'eventDateTime', 'status'];

  dataSource = new MatTableDataSource(this.docketTableDataList);
  selectedDocketSession: DocketSession;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  noRecordsToDisplay: boolean = false;

  ngOnInit() {

    this.sideNavService.filterDataObtained.subscribe((filteredDocketSessions: DocketSession[]) => {
      this.docketTableDataList = [];

      if (filteredDocketSessions.length === 0) {
        this.noRecordsToDisplay = true;
      } else {
        this.noRecordsToDisplay = false;
      }

      for (let docket of filteredDocketSessions) {
        this.docketTableDataList.push(docket);
      }
      this.dataSource = new MatTableDataSource(this.docketTableDataList);
      this.dataSource.paginator = this.paginator;
    });
  }


  openDialog(selectedDocketSession: DocketSession) {
    this.selectedDocketSession = selectedDocketSession;
    let dialogRef = this.matDialog.open(DocketTimelineContentDetailsComponent, {
      width: '65em',
      data: this.selectedDocketSession
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('This dialog is closed '+result);
    });
  }

}
