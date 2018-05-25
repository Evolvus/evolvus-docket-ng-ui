import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DocketSession } from '../../shared/docket-session-model';
@Component({
  selector: 'app-docket-timeline-content-details',
  templateUrl: './docket-timeline-content-details.component.html',
  styleUrls: ['./docket-timeline-content-details.component.css']
})
export class DocketTimelineContentDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DocketTimelineContentDetailsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

docketSession: DocketSession;
sessionDetails: any[] = [];
sessionDetailTitles: string[] = ["Application",
"Name", "Ip Address", "Details", "Status", "Created by", "Event Date Time"];

  ngOnInit() {
    this.docketSession = this.data;
    this.sessionDetails.push(this.docketSession.application);
    this.sessionDetails.push(this.docketSession.name);
    this.sessionDetails.push(this.docketSession.ipAddress);
    this.sessionDetails.push(this.docketSession.details);
    this.sessionDetails.push(this.docketSession.status);
    this.sessionDetails.push(this.docketSession.createdBy);
    this.sessionDetails.push(this.docketSession.eventDateTime);
  }

closeDialog(){
  this.dialogRef.close();

}

}
