import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccservService } from '../accserv.service';
import * as moment from 'moment';
import { LiveStrservService } from '../live-strserv.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private lsserv:LiveStrservService,private route:Router) { }

  registerForm =new FormGroup({
    rfemail:new FormControl('',[Validators.required,validateEmail]),
    rfpass:new FormControl('',[Validators.required,validatePass]),
    rfconfpass:new FormControl('',[Validators.required,validateConfPass]),
    rfchecked:new FormControl()
  })
  ngOnInit(): void {
  }

  saveDetails()
  { 
    this.lsserv.liveStrserv=this.registerForm.controls.rfchecked.value;
    this.route.navigate(['/accounts/login'])
   
}
}

export function validateEmail(control:AbstractControl){
  let email=control.value  
  let validRegex ="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  if (email.match(validRegex))
  {
    return null;
    
  }
  else
  {
    return {myerr:false}
  }
}


export function validatePass(control:AbstractControl){
  let pass:string=control.value  
  
  if(pass.length >=6)
  {
    return null;
  }
  else
  {
    return {myerr1:false}
  }
}


export function validateConfPass(control:AbstractControl){
  let confpass:string=control.value  
  
  if(confpass.length >=6)
  {
    return null;
  }
  else
  {
    return {myerr2:false}
  }
}





