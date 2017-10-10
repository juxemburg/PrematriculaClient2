import { Injectable } from '@angular/core';
import { Estudiante } from 'app/matricula/models/matricula-models';

@Injectable()
export class UserService {
  private static _user:Estudiante;
  constructor() { }

  public IsUserActive(): boolean {
    return UserService._user !== null;
  }

  public SetUser(user:Estudiante):void {
    UserService._user = user; 
    console.log(`UserId changed to ${UserService._user.id}`);
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
