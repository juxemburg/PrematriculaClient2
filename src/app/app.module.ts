//Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatriculaModule } from './matricula/matricula.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
//Componentes
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from './http-client/http-client.module';
import { DashboardGuardService } from 'app/matricula/dashboard-guard.service';
import { MatriculaWizardGuardService } from 'app/matricula/matricula-wizard-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MatriculaModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DashboardGuardService, MatriculaWizardGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
