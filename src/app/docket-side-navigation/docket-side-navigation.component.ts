import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DocketSideNavService } from '../docket-side-nav.service';
import { SideNavFormContentService } from './docket-side-nav-form-content.service';
import { DocketSideNavFormModel } from '../shared/docket-side-nav-form.model';
import { DocketSideFilterSelectModel } from '../shared/docket-side-filter-select.model';
import { NgForm } from '@angular/forms';
import { DocketTimelineContentService } from '../docket-timeline-content/docket-timeline-content.service';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-docket-side-navigation',
  templateUrl: './docket-side-navigation.component.html',
  styleUrls: ['./docket-side-navigation.component.css'],

})

export class DocketSideNavigationComponent implements OnInit {

  constructor(private docketService: DocketSideNavService, private docketSideForm: SideNavFormContentService, private docketTimelineContent: DocketTimelineContentService, private http: HttpClient) {
  }
  docketURL = environment.docketURL;
  filterApplied = new Subject<DocketSideFilterSelectModel>();


  ngOnInit() {

    this.docketSideForm.getDataIfNotAvailable(undefined);  
    this.docketSideForm.sideNavFormDataChanged.subscribe((docketSessionData: DocketSideNavFormModel) => {
      this.sideNavFormData = docketSessionData;
    });  
  }

  sideNavDisplay = false;
  arrowPointingLeft = true; //Used for HTML Purpose
  sideNavData: DocketSideFilterSelectModel = {
    application: "", source: "",
    ipAddress: "",
    level: "",
    createdBy: "",
    status: "",
    fromDate: "",
    toDate: ""
  };

  getFormData(){
    this.docketSideForm.getDataIfNotAvailable(this.sideNavData.application);

  }

  sideNavFormData: DocketSideNavFormModel = {
    applicationOptions: [],
    sourcesOptions: [],
    ipAddressOptions: [],
    levelOptions: [],
    createdByOptions: [],
    statusOptions: []
  };



  hideSideNav() {

    if (this.sideNavDisplay) {
      document.getElementById('sideNavBarContent').style.display = "block";
      document.getElementById('sideNavBar').style.width = "240px";
      document.getElementById('sideNavBar').style.overflowY = "scroll";
      this.arrowPointingLeft = !this.arrowPointingLeft;
      this.sideNavDisplay = !this.sideNavDisplay;
      this.docketService.hideSideNav();
    }
    else {
      document.getElementById('sideNavBarContent').style.display = "none";
      document.getElementById('sideNavBar').style.width = "60px";
      document.getElementById('sideNavBar').style.overflowY = "hidden";
      this.arrowPointingLeft = !this.arrowPointingLeft;
      this.sideNavDisplay = !this.sideNavDisplay;
      this.docketService.hideSideNav();
    }

  }

  filterTimeline(filterForm: NgForm) {
    this.docketTimelineContent.sideNavFilterApplied.next(true);
    this.http.get(`${this.docketURL}/api/audit`,
      {
        params: {
          application: filterForm.form.value.application,
          source: filterForm.form.value.source,
          // ipAddress: filterForm.form.value.ipAddress,
          createdBy: filterForm.form.value.createdBy,
          status: filterForm.form.value.status,
          fromDate: filterForm.form.value.fromDate,
          toDate: filterForm.form.value.toDate
        }
      })
      .subscribe((response:any) => {
        if(response!=null){
this.docketSideForm.filterDataObtained.next(response.data);
        }
        
      });

  }
}
