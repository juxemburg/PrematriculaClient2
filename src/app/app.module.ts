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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
