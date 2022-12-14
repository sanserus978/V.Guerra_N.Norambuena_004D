import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetdatosService } from '../../service/getdatos.service';

@Component({
  selector: 'app-homeprof',
  templateUrl: './homeprof.page.html',
  styleUrls: ['./homeprof.page.scss'],
})
export class HomeprofPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
  
  public getNombre(){
    return GetdatosService.Usuario;
  }

}
