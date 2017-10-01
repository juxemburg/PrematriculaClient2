import { Injectable } from '@angular/core';
import { HttpService } from 'app/http-client/http.service';
import { Programa } from 'app/matricula/models/matricula-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatriculaService {
  private _programas: Programa[];

  constructor(private _httpService: HttpService) { }

  public Get_Programas(idEstudiante: string):
    Observable<Programa[]> {
    return this._httpService
      .Get<Programa[]>(`programas?idEst=${idEstudiante}`);
  }

  public Get_Programa(id: string) :Observable<Programa> {
    return this._httpService
    .Get<Programa>(`{programa?id=${id}`);
  }
}
