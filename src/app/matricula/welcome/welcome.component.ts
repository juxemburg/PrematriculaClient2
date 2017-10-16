import { Component, OnInit } from '@angular/core';
import { Programa } from 'app/matricula/models/matricula-models';
import { ProgramaService } from 'app/matricula/programa.service';
import { UserService } from 'app/login/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private _programas: Programa[];
  private estId:string;

  constructor(private _service:ProgramaService,
    private _usrService:UserService) { }

  ngOnInit() {
    this.estId = this._usrService.GetUserId();
    this.loadInfo();
  }

  private loadInfo() {
    this._service.getProgramas(this.estId)
      .subscribe(data =>{
         this._programas = data;
      }, err => {
        console.log("error while loading programas...");
      });
  }
  
}
