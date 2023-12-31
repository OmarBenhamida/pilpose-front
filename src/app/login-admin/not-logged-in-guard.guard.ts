import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAdminService } from './login-admin.service';


@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuardGuard implements CanActivate {

  constructor(private router: Router,private loginService:LoginAdminService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.loginService.isLogged()){
        this.router.navigateByUrl('/');
        return false;
     }
      return true;


  }

}
