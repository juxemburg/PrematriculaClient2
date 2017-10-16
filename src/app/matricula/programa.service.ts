import { Injectable } from '@angular/core';
import { HttpService } from 'app/http-client/http.service';
import { Programa } from 'app/matricula/models/matricula-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProgramaService {

  constructor(private httpService:HttpService) {}

  getProgramas(idEst:string):Observable<Programa[]> {
    return this.httpService
      .Get<Programa[]>(`programas?idEst=${idEst}`);
  }

}
