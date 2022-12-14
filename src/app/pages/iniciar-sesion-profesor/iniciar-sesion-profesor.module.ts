import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionProfesorPageRoutingModule } from './iniciar-sesion-profesor-routing.module';

import { IniciarSesionProfesorPage } from './iniciar-sesion-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarSesionProfesorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IniciarSesionProfesorPage]
})
export class IniciarSesionProfesorPageModule {}
