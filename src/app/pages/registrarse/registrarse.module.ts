import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarsePageRoutingModule } from './registrarse-routing.module';

import { RegistrarsePage } from './registrarse.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarsePage]
})
export class RegistrarsePageModule {}
