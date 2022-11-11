import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccservService } from './accserv.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor(private accserv:AccservService,private route:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.accserv.accstatus())
    {
      return true;
    }
    else{
      this.route.navigate(['/accounts/login'])
      console.log(route.firstChild?.routeConfig?.path);
      this.accserv.redirectedUrl="/"+route.url[0].path+"/"+route.firstChild?.routeConfig?.path;
      return false;
    }
    
  }
  
}
