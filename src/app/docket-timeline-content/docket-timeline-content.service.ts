import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DocketSession } from '../shared/docket-session-model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DocketSideFilterSelectModel } from '../shared/docket-side-filter-select.model';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class DocketTimelineContentService {

  constructor(private http: HttpClient) {
  }
  docketURL = environment.docketURL;
  filterTypeChanged = new Subject<DocketSideFilterSelectModel>();
  docketSessionDataChanged = new Subject<DocketSession[]>();
  sideNavFilterApplied = new Subject<boolean>();
  docketSessionList: DocketSession[] = [];

  ngOnInit() {

  }





  getDocketSessionList() {
    return this.docketSessionList;
  }

  getDocketFromDB() {
    this.http.get(`${this.docketURL}/api/audit`)
      .subscribe((response: any) => {
        if(response!=null){

          this.docketSessionList = response.data;
        
          this.docketSessionDataChanged.next(this.docketSessionList.slice());
        }
      });
  }


  setDocketSessionList(docketSessionList: DocketSession[]) {
    this.docketSessionList = docketSessionList;
    this.docketSessionDataChanged.next(this.docketSessionList.slice());
  }

  setSideNavFilter(sideNavFilterData: DocketSideFilterSelectModel) {
    this.filterTypeChanged.next(sideNavFilterData);
  }


}
