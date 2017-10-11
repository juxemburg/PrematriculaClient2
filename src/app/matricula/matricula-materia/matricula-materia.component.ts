import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'app/matricula/models/matricula-models';


@Component({
  selector: 'app-matricula-materia',
  templateUrl: './matricula-materia.component.html',
  styleUrls: ['./matricula-materia.component.css']
})
export class MatriculaMateriaComponent implements OnInit {

  @Input()
  public materia:Materia;
  constructor() { 

  }

  ngOnInit() {
  }


}
