import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivarCamaraPage } from './activar-camara.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivarCamaraPageRoutingModule {}
