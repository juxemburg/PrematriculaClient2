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
    state: RouterStateSnapshot): Observable<boolean> {
    var value = this._usrService.IsUserActive();
    if (!value) {
      this._router.navigate(['/login']);
    }
    return Observable.create(observable => {
      observable.next(value);
      observable.complete();
    });
  }



}
