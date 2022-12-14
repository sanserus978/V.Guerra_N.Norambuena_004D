import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos{
  id: number;
  nomUsuario: string;
  correoInst: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  constructor() { }
}
