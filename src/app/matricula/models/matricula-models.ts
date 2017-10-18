export class Materia {

    constructor(public id: string, public nombre: string,
        public numSemestre: number, public idProg: string) { }
}

export class MateriaGroup {
    constructor(public numSemestre:string, 
        public materias: Materia[]) {
    }
}

export class Programa {
    constructor(public id: string, public nombre: string,
        public codigo: string) { }
}

export class Prematricula {
    public fecha:Date;
    constructor(public idEst: string, public idProg:string,
        public materias:string[]) {
            this.fecha = new Date();
    }
}

export class Estudiante {

    public NombreCompleto: string = "";
    
    constructor(public id: string, public nombres: string,
        public apellidos: string) { 
            this.NombreCompleto = `${this.nombres} ${this.apellidos}`
        }   
}