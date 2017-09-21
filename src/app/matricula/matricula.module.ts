import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent]
})
export class MatriculaModule { }
