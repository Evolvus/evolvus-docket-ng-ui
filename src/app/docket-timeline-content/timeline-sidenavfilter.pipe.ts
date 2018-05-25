import { Pipe, PipeTransform } from '@angular/core';
import { DocketSideFilterSelectModel } from '../shared/docket-side-filter-select.model';


@Pipe({
  name: 'timelineSidenavfilter',
  pure: false
})
export class TimelineSidenavfilterPipe implements PipeTransform {

  transform(docketSessionList: any[], sideNavFilterData: DocketSideFilterSelectModel): any[] {

    if (!docketSessionList) return [];
    if (!sideNavFilterData) return docketSessionList;

    return docketSessionList.filter(docketSession => {
      if (!docketSession.application.toLowerCase().includes(sideNavFilterData.application.toLowerCase())) {
        return false;
      }

      if (!docketSession.ipAddress.toLowerCase().includes(sideNavFilterData.ipAddress.toLowerCase())) {
        return false;
      }

      if (!docketSession.status.toLowerCase().includes(sideNavFilterData.status.toLowerCase())) {
        return false;
      }
      if (!docketSession.createdBy.toLowerCase().includes(sideNavFilterData.createdBy.toLowerCase())) {
        return false;
      }
      return true;
    });


  }

}
