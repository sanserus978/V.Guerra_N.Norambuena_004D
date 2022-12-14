import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alumno } from '../interfaces/alumno';
import { AlumnosService } from 'src/app/service/alumnos.service';



@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.page.html',
  styleUrls: ['./agregar-alumnos.page.scss'],
})
export class AgregarAlumnosPage implements OnInit {

  newAlumno: alumno = {
    correo: "", 
    seccion: "",
    fecha:""
  }

  constructor(private alumnoService: AlumnosService, 
              private router: Router) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.alumnoService.crearAlumno(this.newAlumno).subscribe();
    this.router.navigateByUrl("/listar-alumnos");
  }

}
