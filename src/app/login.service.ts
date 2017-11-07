import { Injectable } from '@angular/core';

import { LoginModel } from './models/login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Estudiante } from 'app/matricula/models/matricula-models';
import { HttpService } from 'app/http-client/http.service';
import { UserService } from 'app/user.service';
@Injectable()
export class LoginService {

  constructor(private _service: HttpService,
    private _usrService: UserService) { }

  public Login(model: LoginModel): Observable<Estudiante> {
    return this._service
      .Post<Estudiante, LoginModel>("account/login", model)
      .do(res => {
        console.log("recieved login:");
        console.log(res);
        this._usrService.SetUser(res);
      });
  }



}
