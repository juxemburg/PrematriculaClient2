import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'app/matricula/materia.service';
import { MateriaGroup } from 'app/matricula/models/matricula-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  public materias:MateriaGroup[];
  private _estudianteId:string;
  public isLoading:boolean = false;
  constructor(private _route:ActivatedRoute,
    private _service:MateriaService) { }

  ngOnInit() {
    this.isLoading = true;
    this._estudianteId = this._route.snapshot.paramMap.get('idEst');
    this.loadData();
  }

  loadData() {
    this._service.getPensum(this._estudianteId)
    .subscribe(data => {
      this.materias = data;
      this.isLoading = false;
    },
    err => {
      console.log("error while loading materias...");
    })
  }

}
