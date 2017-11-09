import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/login/user.service';

@Injectable()
export class DashboardGuardService implements CanActivate {

  constructor(private _router: Router,
    private _usrService: UserService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // const value = true;
    return this._usrService.IsUserActive();
  }
}
