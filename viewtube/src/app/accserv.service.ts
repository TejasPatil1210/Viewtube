import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccservService {

  constructor() { }

  isAcclogin:boolean=false;
  redirectedUrl:any | null=null;

  accstatus()
  {
    return this.isAcclogin;
  }


}
