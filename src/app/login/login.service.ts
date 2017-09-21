import { Injectable } from '@angular/core';
import { HttpService } from '../http-client/http.service';
import { LoginModel } from './models/login';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private _service: HttpService) { }

  public Login(model: LoginModel): Observable<boolean> {
    return this._service
      .Post<boolean, LoginModel>("account/login", model);
  }

}
