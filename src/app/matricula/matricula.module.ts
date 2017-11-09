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
import { ProgramaService } from './programa.service';
import { MatriculaMateriaComponent } from './matricula-materia/matricula-materia.component';
import { HistoryComponent } from './history/history.component';
import { PensumComponent } from './pensum/pensum.component';
import { MatriculaRoutes } from 'app/matricula/matricula.module.routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(MatriculaRoutes.routes)
  ],
  declarations: [DashboardComponent, SidebarComponent,
     MatriculaWizardComponent, DashboardNavbarComponent,
      WelcomeComponent, MatriculaMateriaComponent, HistoryComponent, PensumComponent],
  providers:[MatriculaService, MateriaService, ProgramaService]
})
export class MatriculaModule { }
