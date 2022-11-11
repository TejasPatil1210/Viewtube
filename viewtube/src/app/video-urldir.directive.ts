import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors,NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appVideoUrldir]',
  providers:[{provide:NG_VALIDATORS,
    useExisting:VideoUrldirDirective, multi: true}]
})
export class VideoUrldirDirective implements Validator{

  validregex:any="((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?";
  //  validregex:any="^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$";

  constructor() { }
validate(control: AbstractControl<any, any>): ValidationErrors | null {
  if(control.value==null) {return null;}
  if(control.value.match(this.validregex))
  {
    console.log(control.value);
    console.log(this.validregex);
    return null;
  }
  else{
      return{appVideoUrldir:false}
  }
}
}
