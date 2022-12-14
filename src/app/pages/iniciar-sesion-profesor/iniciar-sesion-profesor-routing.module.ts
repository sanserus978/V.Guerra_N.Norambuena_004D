import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarSesionProfesorPage } from './iniciar-sesion-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSesionProfesorPageRoutingModule {}
