import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarCamaraPageRoutingModule } from './activar-camara-routing.module';

import { ActivarCamaraPage } from './activar-camara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarCamaraPageRoutingModule
  ],
  declarations: [ActivarCamaraPage]
})
export class ActivarCamaraPageModule {}
