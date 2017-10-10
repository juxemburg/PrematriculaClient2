import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatriculaWizardComponent } from './matricula-wizard/matricula-wizard.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatriculaService } from 'app/matricula/matricula.service';
import { DashboardGuardService } from 'app/matricula/dashboard-guard.service';
import { MatriculaWizardGuardService } from 'app/matricula/matricula-wizard-guard.service';
import { MateriaService } from 'app/matricula/materia.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        canActivate:[DashboardGuardService],
        component: DashboardComponent,
        children: [
          {path:'', redirectTo: 'welcome', pathMatch: 'full'},
          {path:'welcome', component: WelcomeComponent},
          {path:'wizard/:id',
          canActivate: [MatriculaWizardGuardService],
          component: MatriculaWizardComponent}]
      },
    ])
  ],
  declarations: [DashboardComponent, SidebarComponent, MatriculaWizardComponent, DashboardNavbarComponent, WelcomeComponent],
  providers:[MatriculaService, MateriaService]
})
export class MatriculaModule { }
