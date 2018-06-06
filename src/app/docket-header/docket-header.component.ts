import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-docket-header',
  templateUrl: './docket-header.component.html',
  styleUrls: ['./docket-header.component.css']
})
export class DocketHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.liveDate();
  }

  username: string = "User";
  isNotificationOpen: boolean = false;
  liveTime: Date;


  logout() {
    if (confirm('Are you sure?')) {
      this.router.navigate(['logout']);
    }
  }

  liveDate() {
    setInterval(() => {
      this.liveTime = new Date();
    }, 1000);
  }


  openNotifications() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }



}
