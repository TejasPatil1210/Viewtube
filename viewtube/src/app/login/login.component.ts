import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccservService } from '../accserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private accserv:AccservService,private route:Router) { }

loginForm=new FormGroup({
  lgemail:new FormControl('',[Validators.required,validateemail]),
  lgpass:new FormControl('',[Validators.required,validatepass])
})  
ngOnInit(): void {
 }

acclogin()
{
  this.accserv.isAcclogin=true;
  if(this.accserv.redirectedUrl!==null)
  {
    this.route.navigate([this.accserv.redirectedUrl])
  }
  else
  {
    this.route.navigate([''])
  }
}

}


export function validateemail(control:AbstractControl){
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


export function validatepass(control:AbstractControl){
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




