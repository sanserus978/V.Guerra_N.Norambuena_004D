import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScannerOptions,BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-activar-camara', 
  templateUrl: './activar-camara.page.html',
  styleUrls: ['./activar-camara.page.scss'],
})
export class ActivarCamaraPage {

  codescan:{};

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codescan = barcodeData.text;
      console.log('Barcode data', this.codescan);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
