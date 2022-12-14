import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
