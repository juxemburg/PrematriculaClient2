import { Component, OnInit } from '@angular/core';
import { Materia, MateriaGroup } from 'app/matricula/models/matricula-models';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from 'app/matricula/matricula.service';
import { MateriaService } from 'app/matricula/materia.service';

@Component({
  selector: 'app-matricula-wizard',
  templateUrl: './matricula-wizard.component.html',
  styleUrls: ['./matricula-wizard.component.css']
})
export class MatriculaWizardComponent implements OnInit {


  private _programaId:string;
  private _materias:MateriaGroup[];

  constructor(private _route: ActivatedRoute,  
    private _service: MatriculaService,
    private _materiaService: MateriaService) { 

  }

  ngOnInit() {
    this._programaId = this._route.snapshot.paramMap.get('id');
    this.loadMaterias();
  }

  private loadMaterias() {
    this._materiaService.getMaterias(this._programaId)
      .subscribe(data => {
        this._materias = data;
      }, err => {
        console.log("error loading data: "+err);
      });
  }
}
