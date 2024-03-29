import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $.material.options.autofill = true;
    $.material.init();
  }
  title = 'app';
}
