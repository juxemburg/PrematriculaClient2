import { Injectable } from '@angular/core';
import { HttpService } from '../http-client/http.service';
import { LoginModel } from './models/login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { UserService } from 'app/login/user.service';
@Injectable()
export class LoginService {

  constructor(private _service: HttpService,
    private _usrService: UserService) { }

  public Login(model: LoginModel): Observable<string> {
    return this._service
      .Post<string, LoginModel>("account/login", model)
      .do(res => {this._usrService.SetUserId(res)});
  }



}
