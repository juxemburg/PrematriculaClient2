import { Component, OnInit } from '@angular/core';
import { Programa, Estudiante } from 'app/matricula/models/matricula-models';
import { ProgramaService } from 'app/matricula/programa.service';
import { UserService } from 'app/login/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public _programas: Programa[];
  private est: Estudiante;

  constructor(private _service:ProgramaService,
    private _usrService:UserService) { }

  ngOnInit() {
    this.loadInfo();
  }

  private loadInfo() {
    this.est = this._usrService.GetUser();
    console.log('loaded user:');
    console.log(this.est.programas);
    this._programas = this.est.programas;
  }
}

