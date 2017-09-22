import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatriculaWizardComponent } from './matricula-wizard/matricula-wizard.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {path:'', component: MatriculaWizardComponent},
          {path:'wizard', component: MatriculaWizardComponent}]
      },
    ])
  ],
  declarations: [DashboardComponent, SidebarComponent, MatriculaWizardComponent, DashboardNavbarComponent]
})
export class MatriculaModule { }
