

export class DocketSession{
  _id: number;
  createdBy: string;
  name: string;
  application: string;
  source: string;
  ipAddress: string;
  level: string;
  status: string;
  eventDateTime: string;
  details: string;

constructor(_id: number, createdBy: string, name: string, application: string, ipAddress: string, level: string, status: string, details: string){
this._id = _id
this.createdBy = createdBy;
this.name = name;
this.application = application;
this.ipAddress = ipAddress;
this.level = level;
this.status = status;
this.details = details;

}
}
