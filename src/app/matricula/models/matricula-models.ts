export class Materia {

    constructor(public id: string, public nombre: string,
        public numSemestre: number, public idProg: string) { }
}

export class MateriaGroup {
    constructor(public numSemestre: string,
        public materias: Materia[]) {
    }
}

export class Programa {
    constructor(public id: string, public nombre: string,
        public codigo: string) { }
}

export class Prematricula {
    public fecha: Date;
    constructor(public idEst: string, public idProg: string,
        public materias: string[]) {
        this.fecha = new Date();
    }
}

export class Estudiante {

    public NombreCompleto: string = "";
    private _programas: Programa[];

    constructor(public id: string, public nombres: string,
        public apellidos: string, public codigos: string[],
        public programas: string[]) {
        this.NombreCompleto = `${this.nombres} ${this.apellidos}`;
        if (programas.length != codigos.length)
            return;

        for (var i in programas) {
            this._programas.push(new Programa("P1",
                programas[i], codigos[i]));
        }
    }

    public GetProgramas(): Programa[] {
        return this._programas;
    }
}