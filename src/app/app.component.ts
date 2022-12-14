import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


constructor(private alertController: AlertController,
            private navCtrl: NavController){}


componentes: Componente[] = [ 
  {
    icon: 'layers-outline',
    name: 'Api',
    redirecTo: '/api',
  },
  {
    icon: 'alert-circle-outline',
    name: 'Sobre nosotros',
    redirecTo:'/aboutus',
  },
];

async salir(){
  const alert = await this.alertController.create({
    header: 'Salir',
    message: '¿Seguro que desea cerrar la sesión?',
    buttons: [
      {
        text: 'No',
        handler: () => {

        }
      }, {
        text: 'Si',
        handler: () => {
          localStorage.removeItem('alumno');
          localStorage.removeItem('profesor');
          this.navCtrl.navigateRoot('login');
        }
      }
    ]
  });


  await alert.present();
}


}