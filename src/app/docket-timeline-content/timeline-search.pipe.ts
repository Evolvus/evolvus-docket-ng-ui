import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelineSearch'
})
export class TimelineSearchPipe implements PipeTransform {

  transform(docketSessionList: any[], searchText: string): any[] {

   if(!docketSessionList) return [];
   if(!searchText) return docketSessionList;

   searchText = searchText.toLowerCase();

   return docketSessionList.filter( it => {
      return it.application.toLowerCase().includes(searchText);
    });
   }

  }
