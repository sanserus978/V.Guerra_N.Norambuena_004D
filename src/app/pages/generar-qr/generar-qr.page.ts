import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  qrCodeString= 'Hola Mundo'; 
  date = new Date().toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
  scannedResult:any;


  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario={
    modulo:'',
    seccion:'',
  }


  generaScan(){
    this.qrCodeString= this.usuario.modulo.concat('-'+this.usuario.seccion+ ' ' + this.date);
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'La asistencia se ha registrado correctamente!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
