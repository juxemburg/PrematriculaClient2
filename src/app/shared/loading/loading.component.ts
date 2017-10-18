import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  private _isLoaded: boolean;

  @Output()
  loadingChange = new EventEmitter<boolean>();

  constructor() { 

  }

  ngOnInit() {
    this._isLoaded = false;
  }

  public SetLoading(value:boolean) {
    this._isLoaded = value;
  }

}
