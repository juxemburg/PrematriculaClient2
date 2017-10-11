import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'app/matricula/models/matricula-models';


@Component({
  selector: 'app-matricula-materia',
  templateUrl: './matricula-materia.component.html',
  styleUrls: ['./matricula-materia.component.css']
})
export class MatriculaMateriaComponent implements OnInit {

  @Input()
  public materia: Materia;

  @Output()
  public onMateriaSelected = new EventEmitter<any>();


  private _active: boolean;
  constructor() {
  }

  ngOnInit() {
    this._active = false;
  }

  onClickEvent() {
    setTimeout(() => {
      console.log(this._active);
      var res = { value: this._active, result: this.materia };
      this.onMateriaSelected.emit(res);
    }, 200);
  }


}
