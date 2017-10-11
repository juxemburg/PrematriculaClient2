//Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatriculaModule } from './matricula/matricula.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from './http-client/http-client.module';

//Componentes
import { AppComponent } from './app.component';

//Servicios
import { DashboardGuardService } from 'app/matricula/dashboard-guard.service';
import { MatriculaWizardGuardService } from 'app/matricula/matricula-wizard-guard.service';
import { CookieService } from "ngx-cookie-service";


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
  providers: [DashboardGuardService, MatriculaWizardGuardService,
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
