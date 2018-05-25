import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocketSideNavService } from '../docket-side-nav.service';
import { DocketTimelineContentService } from './docket-timeline-content.service';
import { DocketSession } from '../shared/docket-session-model';
import { MatDialog } from '@angular/material';
import { DocketTimelineContentDetailsComponent } from './docket-timeline-content-details/docket-timeline-content-details.component';
import { DocketSideFilterSelectModel } from '../shared/docket-side-filter-select.model';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-docket-timeline-content',
  templateUrl: './docket-timeline-content.component.html',
  styleUrls: ['./docket-timeline-content.component.css']
})
export class DocketTimelineContentComponent implements OnInit {

  constructor(private docketTimelineService: DocketTimelineContentService, public matDialog: MatDialog) { }



  status = false; //html color purpose
  docketSession: DocketSession;
  docketSessionList: DocketSession[] = [];
  selectedDocketSession: DocketSession;
  searchPipeUsed: boolean = true;
  sideNavFilterData: DocketSideFilterSelectModel;
  sideNavFilterSubscription: Subscription;

  displayEmptySign = true;
  searchText = '';
  typeOfPipeUsed = "none";
  showTable = false;
  noOfTimesTryingToFetchData = 1;
  showBulb = false;



  ngOnInit() {
    this.docketTimelineService.getDocketFromDB();

    setInterval(() => {
      this.showBulb = !this.showBulb;
    }, 1000);


    if (this.noOfTimesTryingToFetchData === 1) {
      setTimeout(() => {
        var result2 = this.docketTimelineService.getDocketFromDB();
        if (result2 === undefined) {
          this.noOfTimesTryingToFetchData++;
        }
      }, 10000);
    }

    setInterval(() => {
      this.noOfTimesTryingToFetchData++;
      var result2 = this.docketTimelineService.getDocketFromDB();
    }, 60000);

    this.searchPipeUsed = undefined;
    this.docketTimelineService.docketSessionDataChanged.subscribe((docketSessionList: DocketSession[]) => {
      this.searchPipeUsed = true;
      this.docketSessionList = docketSessionList;
    });

    this.sideNavFilterSubscription = this.docketTimelineService.filterTypeChanged.subscribe((sideNavFilterData: DocketSideFilterSelectModel) => {
      this.sideNavFilterData = sideNavFilterData;
      this.searchPipeUsed = false;
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


  resetTimeline() {
    this.searchPipeUsed = true;
    this.searchText = '';
  }

  ngOnDestroy() {
    this.sideNavFilterSubscription.unsubscribe();
  }

  closeTable() {
    this.showTable = false;
  }
  filterApplied() {
    this.docketTimelineService.sideNavFilterApplied.subscribe((displayTable: boolean) => {
      this.showTable = displayTable;

    });
    return this.showTable;
  }
}
