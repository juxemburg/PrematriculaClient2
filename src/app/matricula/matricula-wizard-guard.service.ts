import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatriculaWizardGuardService implements CanActivate {
  
  constructor(private _router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean{
    let id = +route.url[1].path;
    if(isNaN(id) || id<1) {
      console.log("Programa inválido");
      this._router.navigate(['/dashboard']);
      return false;
    }
    return true; 
  }

  

}
