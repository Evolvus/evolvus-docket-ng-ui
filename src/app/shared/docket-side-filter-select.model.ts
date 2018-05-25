export class DocketSideFilterSelectModel{
  application: string;
  source: string;
  ipAddress: string;
   level: string;
  createdBy: string;
   status: string;
  fromDate: string;
   toDate: string;

// constructor(){
//
// }

constructor(application: string, source: string, ipAddress: string,
  level: string, createdBy: string,status: string, fromDate: string, toDate: string){
  this.application = application;
  this.source = source;
  this.ipAddress = ipAddress;
  this.level = level;
  this.createdBy = createdBy;
  this.status = status;
  this.fromDate = fromDate;
  this.toDate = toDate;
}



}
