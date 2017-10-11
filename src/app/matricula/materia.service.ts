import { Injectable } from '@angular/core';
import { HttpService } from 'app/http-client/http.service';
import { Materia, MateriaGroup } from 'app/matricula/models/matricula-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MateriaService {

  constructor(private _httpService:HttpService) {
     
  }

  public getMaterias(idProg) :Observable<MateriaGroup[]> {
    return this._httpService.Get(`materias?idProg=${idProg}`);
  }
}
