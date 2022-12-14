import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { alumno } from '../pages/interfaces/alumno'; 
import { environment } from 'src/environments/environment';
import { alumnos } from '../pages/interfaces/alumnos';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }


  listarAlumnos():Observable<alumnos>{
    return this.http.get<alumnos>(`${environment.apiURL}/alumno`)
  }


  crearAlumno(newAlumno: alumno):Observable<alumno>{
    return this.http.post<alumno>(`${environment.apiURL}/alumno`,newAlumno)
  }

}
