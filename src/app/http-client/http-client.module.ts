import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { HttpService } from './http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [HttpModule],
  declarations: [],
  providers: [HttpService]
})
export class HttpClientModule { }
