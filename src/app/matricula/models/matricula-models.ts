export class Materia {
    
    constructor(public _id:string, public _nombre:string,
        public _numSemestre:number, public _idProg:string) { }
}

export class Programa {
    constructor(public id:string, public nombre:string, 
    public codigo:string) { }
}