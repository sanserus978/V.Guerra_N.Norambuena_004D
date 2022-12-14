import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular'; 
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { GetdatosService } from '../../service/getdatos.service';
import { FormGroup, 
         FormControl, 
         Validators, 
         FormBuilder 
       } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion-profesor',
  templateUrl: './iniciar-sesion-profesor.page.html',
  styleUrls: ['./iniciar-sesion-profesor.page.scss'],
})
export class IniciarSesionProfesorPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({
                  'correo' : new FormControl("", [Validators.required,
                                                  Validators.minLength(5),
                                                  Validators.maxLength(30),
]),
                  'password': new FormControl("",[Validators.required,
                                                  Validators.minLength(8),
                                                  Validators.maxLength(16),
]),
                })
              }

  ngOnInit() {
  }



  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if(!datos || datos.length==0)
      {
        return null;
      }

      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario == f.password){
          a=1;
          console.log('profesor');
          localStorage.setItem('profesor', 'true');
          this.navController.navigateRoot('homeprof');
          GetdatosService.Usuario = obj.nomUsuario;
        }
      }
      if(a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: '¡Los datos ingresados no son correctos!',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

  usuario={
    nombre:'',
    password:'',
    email:'',
  }


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
