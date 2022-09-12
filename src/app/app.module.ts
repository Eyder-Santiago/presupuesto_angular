import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EgresoServicio, IngresoServicio], //agregar los servicios para hacerlos globales
  bootstrap: [AppComponent]
})
export class AppModule { }
