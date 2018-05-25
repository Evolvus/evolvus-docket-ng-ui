import { Component, OnInit } from '@angular/core';
// import {TooltipModule} from "ngx-tooltip";
import { DocketSideNavService } from '../docket-side-nav.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-docket-home',
  templateUrl: './docket-home.component.html',
  styleUrls: ['./docket-home.component.css']
})
export class DocketHomeComponent implements OnInit {

  constructor(private docketService: DocketSideNavService) {

  }
  sideNavSubscription: Subscription;

  ngOnInit() {

    this.sideNavSubscription = this.docketService.sideNavChanged.subscribe(
      (sideNavStatus: boolean) => {
        if (sideNavStatus) {
          document.getElementById('docketTimeline').style.width = "78%";
          document.getElementById('docketTimeline').style.marginLeft = "8%";
          console.log(sideNavStatus);
        }
        else {
          document.getElementById('docketTimeline').style.width = "78%";
          document.getElementById('docketTimeline').style.marginLeft = "20%";
          console.log(sideNavStatus);
        }
      });
  }


  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }

}
