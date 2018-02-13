import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BajaGrupoComponent } from './baja-grupo/baja-grupo.component';

import{AppRoutingModule} from './app-routing.module';
import { CambioPlanComponent } from './cambio-plan/cambio-plan.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { BajaComponent } from './baja/baja.component';


@NgModule({
  declarations: [
    AppComponent,
    BajaGrupoComponent,
    CambioPlanComponent,
    AutorizacionComponent,
    BajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
