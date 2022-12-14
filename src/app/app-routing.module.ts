import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { IngresadoprofesorGuard } from './guards/ingresadoprofesor.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule),
    canActivate:[IngresadoprofesorGuard]
  },
  {
    path: 'activar-camara',
    loadChildren: () => import('./pages/activar-camara/activar-camara.module').then( m => m.ActivarCamaraPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'iniciar-sesion-profesor',
    loadChildren: () => import('./pages/iniciar-sesion-profesor/iniciar-sesion-profesor.module').then( m => m.IniciarSesionProfesorPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'homeprof',
    loadChildren: () => import('./pages/homeprof/homeprof.module').then( m => m.HomeprofPageModule),
    canActivate:[IngresadoprofesorGuard]
    
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'listar-alumnos',
    loadChildren: () => import('./pages/listar-alumnos/listar-alumnos.module').then( m => m.ListarAlumnosPageModule)
  },
  {
    path: 'agregar-alumnos',
    loadChildren: () => import('./pages/agregar-alumnos/agregar-alumnos.module').then( m => m.AgregarAlumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
