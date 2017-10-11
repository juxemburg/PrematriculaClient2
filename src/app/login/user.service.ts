import { Injectable } from '@angular/core';
import { Estudiante } from 'app/matricula/models/matricula-models';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {
  private static _user:Estudiante;
  constructor(private _cookieService:CookieService) { 
    this.loadUser();
  }
  private loadUser() {
    if(this._cookieService.check('pm-user')){
      UserService._user = 
        JSON.parse(this._cookieService.get('pm-user')) as Estudiante;
    }
  }

  public IsUserActive(): boolean {
    return UserService._user !== null;
  }

  public SetUser(user:Estudiante):void {
    UserService._user = user; 
    this._cookieService.set("pm-user",JSON.stringify(user));
    console.log(`UserId changed to ${UserService._user.id}`);
  }

  public RemoveUser():void {
    UserService._user = null;
    this._cookieService.deleteAll('pm');
  }

  public GetUserId():string {
    return UserService._user.id;
  }

  public GetUser():Estudiante {
    return UserService._user;
  }


  private isBlank(str):boolean {
    return (!str || /^\s*$/.test(str));
  }

}
