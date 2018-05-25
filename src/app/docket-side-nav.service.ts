import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DocketSideNavService implements OnInit{

sideNavChanged = new Subject<boolean>();
showSideNav = false;

ngOnInit(){

}

hideSideNav(){
  this.showSideNav = !this.showSideNav;
  this.sideNavChanged.next(this.showSideNav);
}




}
