import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/login/user.service';

@Injectable()
export class MatriculaWizardGuardService implements CanActivate {
  
  constructor(private _router:Router,
    private _usrService:UserService) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean{
    let id = +route.url[1].path;
    if(isNaN(id) || id<1 && !this._usrService.IsUserActive()) {
      console.log("Programa inválido");
      this._router.navigate(['/dashboard']);
      return false;
    }
    console.log("route activated");
    return true; 
  }

  

}
