import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiveStrservService {

  constructor() { }

  liveStrserv:boolean=false;

  startdate:any

  liveStr()
  {
    return this.liveStrserv;
  }

  getStartDate()
  {
    return this.startdate
  }
}
