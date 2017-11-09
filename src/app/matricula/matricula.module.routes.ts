import { Routes } from "@angular/router";
import { DashboardGuardService } from "app/matricula/dashboard-guard.service";
import { DashboardComponent } from "app/matricula/dashboard/dashboard.component";
import { WelcomeComponent } from "app/matricula/welcome/welcome.component";
import { HistoryComponent } from "app/matricula/history/history.component";
import { PensumComponent } from "app/matricula/pensum/pensum.component";
import { MatriculaWizardGuardService } from "app/matricula/matricula-wizard-guard.service";
import { MatriculaWizardComponent } from "app/matricula/matricula-wizard/matricula-wizard.component";

export class MatriculaRoutes {
    public static routes: Routes = [
        {
            path: 'dashboard',
            canActivate: [DashboardGuardService],
            component: DashboardComponent,
            children: [
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'welcome', component: WelcomeComponent },
                { path: 'history', component: HistoryComponent },
                { path: 'curriculum/:idEst', component: PensumComponent },
                {
                    path: 'wizard/:id/:idProg',
                    canActivate: [MatriculaWizardGuardService],
                    component: MatriculaWizardComponent
                }]
        },
    ];
}