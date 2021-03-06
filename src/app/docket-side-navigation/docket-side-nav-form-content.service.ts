import { HttpClient } from '@angular/common/http';
import { DocketSideNavFormModel } from '../shared/docket-side-nav-form.model';
import { OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DocketSession } from '../shared/docket-session-model';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SideNavFormContentService implements OnInit {

  constructor(private http: HttpClient) {

  }
  docketURL = environment.docketURL;
  ngOnInit() {

  }


  sideNavFormDataChanged = new Subject<DocketSideNavFormModel>();
  filterDataObtained = new Subject<DocketSession[]>();


  // getDataIfNotAvailable(applicationName) {
  //  return this.getFormData(applicationName);
  // }

  getFormData(applicationName) {
   return this.http.get(`${this.docketURL}/api/getFilterOptions`,{
      params:{
        application: applicationName
      }
    });
    //   .subscribe((response: any) => {
    //  this.sideNavFormDataChanged.next(response.data);
    //   });



  }

}
