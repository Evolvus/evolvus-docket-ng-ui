import { DocketSideNavFormModel } from '../shared/docket-side-nav-form.model';
import { OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DocketSession } from '../shared/docket-session-model';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SideNavFormContentService implements OnInit {

  constructor(private http: Http) {

  }
  docketURL = environment.docketURL;
  ngOnInit() {

  }


  sideNavFormDataChanged = new Subject<DocketSideNavFormModel>();
  filterDataObtained = new Subject<DocketSession[]>();


  getDataIfNotAvailable() {
    this.getFormData();
    setInterval(() => {
      this.getFormData();
    }, 50000);
  }

  getFormData() {

    this.http.get(this.docketURL + '/getFilterOptions')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe((docketFilteredSessionList: DocketSideNavFormModel) => {
        this.sideNavFormDataChanged.next(docketFilteredSessionList);
      });



  }

}
