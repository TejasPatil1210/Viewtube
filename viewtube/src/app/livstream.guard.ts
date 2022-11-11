import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LiveStrservService } from './live-strserv.service';

@Injectable({
  providedIn: 'root'
})
export class LivstreamGuard implements CanActivate {
  constructor(private liveser:LiveStrservService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.liveser.liveStr())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  
}
