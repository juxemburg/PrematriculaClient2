import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'loading',
        component: LoadingComponent
      }
    ]),
    BrowserModule
  ],
  declarations: [FooterComponent, LoadingComponent],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    BrowserAnimationsModule,
    LoadingComponent,
    BrowserModule
  ]
})
export class SharedModule { }
