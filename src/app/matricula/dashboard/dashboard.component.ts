import { Component, OnInit } from '@angular/core';
import perfectScrollbar from "perfect-scrollbar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _container;

  constructor() { }

  ngOnInit() {
    var element = document.getElementById('dashboard-container');
    this._container = new perfectScrollbar('#dashboard-container');
  }

}
