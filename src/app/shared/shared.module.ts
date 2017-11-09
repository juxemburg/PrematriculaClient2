import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { LocalDataService } from './local-data.service';

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
  ],
  providers: [LocalDataService]
})
export class SharedModule { }
