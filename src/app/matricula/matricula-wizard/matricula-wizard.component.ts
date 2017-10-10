import { Component, OnInit } from '@angular/core';
import { Materia } from 'app/matricula/models/matricula-models';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from 'app/matricula/matricula.service';

@Component({
  selector: 'app-matricula-wizard',
  templateUrl: './matricula-wizard.component.html',
  styleUrls: ['./matricula-wizard.component.css']
})
export class MatriculaWizardComponent implements OnInit {


  private _programaId:string;

  constructor(private _route: ActivatedRoute, 
    private _service: MatriculaService) { 

  }

  ngOnInit() {
    this._programaId = this._route.snapshot.paramMap.get('id');
  }
}
