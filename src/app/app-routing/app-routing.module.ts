import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

//Componentes
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch:'full' },
      { path: '**', component: ErrorComponent, pathMatch:'full' }
    ], { useHash: true })
  ],
  exports: [ErrorComponent, RouterModule],
  declarations: [ErrorComponent]
})
export class AppRoutingModule { }
