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
  private _class: string;
  private baseClass = " ";
  constructor() {
  }

  ngOnInit() {
    this._active = false;
    this._class = "btn btn-round btn-raised btn-white";
  }

  onClickEvent() {
    this._active = !this._active;
    this.setClass();
    var res = {
      value: this._active,
      result: this.materia,
      callback: () => { 
        console.log(this._active);
        this._active = false;
        this.setClass();
      }
    };
    this.onMateriaSelected.emit(res);
  }

  setClass() {
    this._class = (this._active) ? "btn btn-round btn-raised btn-primary" : "btn btn-round btn-raised btn-white";
  }

}