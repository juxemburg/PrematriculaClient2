export class LoginModel {
    constructor(public user:string, public password:string) {
    }
}

export class Estudiante {
    constructor(private _id:string, private _nombres:string,
         private _apellido:string) {
    }
}