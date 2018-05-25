export class DocketTableModel{

  application: string;
  name: string;
  source: string;
  eventDateTime: string;
  status: string;

constructor( application: string, name: string,source: string, eventDateTime: string,status: string ){

  this.application = application;
  this.name =  name;
  this.source = source;
  this.eventDateTime = eventDateTime;
  this.status = status;

}

}
