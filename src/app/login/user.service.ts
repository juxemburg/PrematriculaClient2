import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private static _userId:string ="";
  constructor() { }

  public IsUserActive(): boolean {
    return !this.isBlank(UserService._userId);
  }

  public SetUserId(userId):void {
    UserService._userId = userId; 
    console.log(`UserId changed to ${UserService._userId}`);
  }

  public GetUserId():string {
    return UserService._userId;
  }

  private isBlank(str):boolean {
    return (!str || /^\s*$/.test(str));
  }

}
