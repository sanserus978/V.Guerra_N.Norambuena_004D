import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(private navController: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('alumno')){
      this.navController.navigateRoot('home');
      return false;
    }
    if (localStorage.getItem('profesor')){
      this.navController.navigateRoot('homeprof');
      return false;
    }
    else{
      return true;
    }
  }
  
}
