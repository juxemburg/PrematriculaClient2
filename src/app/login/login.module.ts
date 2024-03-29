import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '../http-client/http-client.module';
import { LoginService } from './login.service';
import { UserService } from 'app/login/user.service';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  providers:[LoginService, UserService]
})
export class LoginModule { }
