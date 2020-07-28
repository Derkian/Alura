import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router  } from "@angular/router";
import { Observable } from 'rxjs';

import { LoginService  } from "../../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
                                Promise<boolean | UrlTree> | 
                                boolean | UrlTree {
                            
      let url: string = state.url;
      
      return this.checkLogin(url);;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | 
    boolean | UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true|UrlTree {

    if (this.loginService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;    

    // Redirect to the login page
    return this.router.createUrlTree(['/login']);
  }  
}
