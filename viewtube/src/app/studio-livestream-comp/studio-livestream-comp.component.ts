import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { LiveStrservService } from '../live-strserv.service';
// import {validateStartDate} from "src/app/studio-livestream-comp/studio-livestream-comp.component"

export interface guest {
  email: string;
}
@Component({
  selector: 'app-studio-livestream-comp',
  templateUrl: './studio-livestream-comp.component.html',
  styleUrls: ['./studio-livestream-comp.component.css']
})

export class StudioLivestreamCompComponent implements OnInit {

  liveStreamEventForm!: FormGroup
  

  ngOnInit(): void {
  }
  constructor(private liveserv:LiveStrservService) { 
  this.liveStreamEventForm=new FormGroup({
    lsEventTitle:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    lsEventStartDate:new FormControl('',[Validators.required,validateStartDate]),
    lsEventStartTime:new FormControl('',[Validators.required]),
    lsEventEndDate:new FormControl('',[Validators.required,validateEndDate]),
    lsEventEndTime:new FormControl('',[Validators.required]),
    eventDetails:new FormControl('',[Validators.required]),
    guestlist:new FormControl('',[Validators.required])},{validators:[]}
  )}
  // guests: guest[] = [];

  // drop(event:CdkDragDrop<guest[]>) {
  //   moveItemInArray(this.guests, event.previousIndex, event.currentIndex);
  //}
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
 
  guests: guest[] = [];
  add(event: MatChipInputEvent): any {
    const value = (event.value || '').trim();
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    
    // Add our guest
    if (value && value.match(validRegex)) {
      this.guests.push({email: value});
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: guest): void {
    const index = this.guests.indexOf(fruit);

    if (index >= 0) {
      this.guests.splice(index, 1);
    }
  }

 
}
  


export function validateStartDate(control:AbstractControl){
  let startdate=moment(control.value)  
  let todaydate=moment();
  LiveStrservService.prototype.startdate=startdate
  console.log("StartDate in SD "+startdate.format());
  console.log("todaydate in SD "+ todaydate.format());
  if(startdate.isBefore(todaydate))
  {
    return {myerr:false}
  }
  else
  {
    return null;
  }
}




export function validateEndDate(this:any,control:AbstractControl)
{
  console.log("helllllllllllllllllllllllllllllllooooooooooooooooo")

  let enddate=moment(control.value)
 //let stdate= moment(this.liveStreamEventForm.get('lsEventStartDate')?.value);
 let stdate= LiveStrservService.prototype.getStartDate()
  //const stdate=moment(this.getStartDate())
 // if(stdate.dirty === undefined)
  // {
  //   return 
  // }
  // else{

 // let startdate =moment(this.liveStreamEventForm.controls['lsEventStartDate'].value? 0 : 0);
   console.log("endDate in ED "+enddate.format());
  console.log("Startdate in ED "+ stdate.format());
  
  if(enddate.isBefore(stdate))
  {
    console.log("Wrong");
    return {myerr4:false}
  }
  else
  {
    console.log("Right");
    return null;
  }
}
//}
  



// export function validateEmail(this: any,  control:AbstractControl){
//   let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
//   let enteredemail=control.value;
//  console.log(enteredemail);
//   if(enteredemail.match(validRegex))
//   {
//    return this.guests.push(enteredemail);
//   }
//   else
//   {
//     console.log("err");
    
//     return {myerr3:false}
//   }
// }
