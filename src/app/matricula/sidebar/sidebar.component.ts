import { Component, OnInit } from '@angular/core';
import { Programa, Estudiante } from 'app/matricula/models/matricula-models';
import { MatriculaService } from 'app/matricula/matricula.service';
import { UserService } from 'app/login/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _est:Estudiante;
  private _activeCode: string;
  private _programas: Programa[] = [];
  constructor(private _service: MatriculaService,
    private _usrService:UserService) { }

  ngOnInit() {
    this._activeCode = '';
    this._est = this._usrService.GetUser();
    this.loadPrograms();
  }

  loadPrograms() {
    this._service.Get_Programas(this._est.id)
    .subscribe(data => {
      this._programas = data;
      console.log(this._programas);
    }, err=>{
      console.log("err");
    });
  }

  onItemClick($event, code) {
    this._activeCode = code;
  }

  isActive(code) {
    return this._activeCode === code;
  }

}
