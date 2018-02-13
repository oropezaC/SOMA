import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { BajaGrupoComponent } from './baja-grupo/baja-grupo.component';
import { CambioPlanComponent } from './cambio-plan/cambio-plan.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { BajaComponent } from './baja/baja.component';



const routes : Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:BajaGrupoComponent},
  {path:'cambio-plan',component:CambioPlanComponent},
  {path:'autorizacion',component:AutorizacionComponent},
  {path:'baja',component:BajaComponent}



];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
