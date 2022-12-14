import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetdatosService } from '../../service/getdatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuController: MenuController) {}

 
  mostrarMenu()
  {
    this.menuController.open('first');
  }
  
  public getNombre(){
    return GetdatosService.Usuario;
  }
    
  

}
