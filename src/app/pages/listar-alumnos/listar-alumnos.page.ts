import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AlumnosService } from 'src/app/service/alumnos.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.page.html',
  styleUrls: ['./listar-alumnos.page.scss'],
})
export class ListarAlumnosPage implements OnInit {

  alumnos=[]
  constructor(private alumnosService: AlumnosService, private loadCtrl: LoadingController) { }
 
  ngOnInit() {
    this.loadAlumnos();
  }

  async loadAlumnos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    this.alumnosService.listarAlumnos().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)     //debemos convertir a string el json que recibimos para el arreglo animalitos
        this.alumnos = JSON.parse(listString)
        event?.target.complete();
        console.log(this.alumnos);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}
