import { Component, OnInit } from '@angular/core';
import { Materia, MateriaGroup, Prematricula } from 'app/matricula/models/matricula-models';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from 'app/matricula/matricula.service';
import { MateriaService } from 'app/matricula/materia.service';
import { MatriculaUtil } from 'app/matricula/util/matricula-util';
import { trigger, style, state, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-matricula-wizard',
  templateUrl: './matricula-wizard.component.html',
  styleUrls: ['./matricula-wizard.component.css'],
  animations: [
    trigger('startAnimation', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-20%)'
        }),
        animate('150ms ease-in')
      ]),
      transition('* => void', [
        animate('160ms 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(60%)'
        }))
      ])
    ])
  ]
})
export class MatriculaWizardComponent implements OnInit {


  private _estudianteId: string;
  private _programaId: string;
  private _materias: MateriaGroup[];
  private _selectedMaterias: any;
  private _callbacks: any;
  private getKeys = Object.keys;
  private _isLoading:boolean = false;

  public _prematricula:Prematricula;

  public numElectivas: string = "0";
  public numFish: string = "0";
  public etica:string = "false";
  public aff: string = "false";

  constructor(private _route: ActivatedRoute,
    private _service: MatriculaService,
    private _materiaService: MateriaService) {

  }

  ngOnInit() {
    this._estudianteId = this._route.snapshot.paramMap.get('id');
    this._programaId = this._route.snapshot.paramMap.get('idProg');
    this.loadData();
    this._selectedMaterias = {};
    this._callbacks = {};
  }

  onMateriaSelected(info: any) {
    this.selectMateria(info.result as Materia, info.value,
       info.callback);
  }

  onMateriaUnselected(materia: Materia) {
    this.selectMateria(materia, false);
  }

  private async loadData() {
    await this.loadPrematricula();
    await this.loadMaterias();
  }

  private async loadMaterias() {

    this._materiaService.getMaterias(this._estudianteId)
      .subscribe(data => {
        this._materias = data;
        console.log("wizard Loaded");
      }, err => {
        console.log("error loading data: " + err);
      });
  }
  private async loadPrematricula() {
    this._service.Get_Prematricula(this._estudianteId,
       this._programaId)
    .subscribe(data => {
      this._prematricula = data;
      console.log(data);
    }, err => {
      console.log("error loading data: " + err);
    })
  }

  private selectMateria(materia: Materia, value: boolean,
    callback: any = null) {
    if (value) {
      this._selectedMaterias[materia.id] = materia;
      this._callbacks[materia.id] = callback;
    }
    else {
      this._callbacks[materia.id]();
      delete this._callbacks[materia.id];
      delete this._selectedMaterias[materia.id];
    }
  }

  public ValidMatricula(): boolean {
    return Object.keys(this._selectedMaterias).length > 0;
  }

  public SendMatricula(): void {
    var datosPrematricula =
      new Prematricula(this._estudianteId, this._programaId,
        "",MatriculaUtil.ToArray<string>(this._selectedMaterias,
          item => item.id),parseInt(this.numElectivas),
          parseInt(this.numFish),
          this.etica=='true', this.aff=='true');
        console.log(datosPrematricula);
    this._materiaService.postPrematricula(datosPrematricula)
        .subscribe(data => {
          debugger;
          console.log(datosPrematricula);
          console.log("data sent");
        }, err => {
          console.log("error while sending data");
        });
  }
}
