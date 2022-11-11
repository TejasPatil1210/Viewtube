import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator,NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appVideoDurationdir]',
  providers:[{provide:NG_VALIDATORS,
    useExisting:VideoDurationdirDirective, multi: true}]
})
export class VideoDurationdirDirective implements Validator {

  constructor() { }

  videoregex:string="^([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$";
validate(control: AbstractControl<any, any>): ValidationErrors | null 
{
  if(control.value==null) {return null;}
  if(control.value.match(this.videoregex)){
    console.log(control.value);
    console.log(this.videoregex);
  return null;
}
else
{
  return {VideoDurationdirDirective:false}
}
}
}




