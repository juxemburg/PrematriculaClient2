import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'app/matricula/models/matricula-models';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-matricula-materia-selected',
  templateUrl: './matricula-materia-selected.component.html',
  styleUrls: ['./matricula-materia-selected.component.css'],
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
export class MatriculaMateriaSelectedComponent implements OnInit {

  @Input()
  public materia: Materia;

  public animationState:string;

  constructor() {
    this.animationState = 'in';
   }

  ngOnInit() {
    this.animationState = 'in';
    console.log("materia instansiated:");
  }



}
