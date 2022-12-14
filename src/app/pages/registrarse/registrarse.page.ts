import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];

  constructor(private registroService: RegistroserviceService,
              private navController: NavController, 
              private alertController: AlertController,
              private toastController: ToastController,
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", [Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(20),
]),
                  'apellido' : new FormControl("", [Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(20),
]),
                  'telefono' : new FormControl("", [Validators.required,
                      Validators.min(99999999),
                      Validators.max(9999999999),
]),
                  'correo' : new FormControl("", [Validators.required, Validators.email,
                    Validators.minLength(5),
                    Validators.maxLength(30),
]),
                  'categoria' : new FormControl("", Validators.required),
                  'password': new FormControl("", [Validators.required,
                     Validators.minLength(8),
                     Validators.maxLength(16),
]),
                  'confirmaPass': new FormControl("", [Validators.required,
                         Validators.minLength(8),
                         Validators.maxLength(16),
])
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form= this.formularioRegistro.value;
    var existe = 0;
    
    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else {
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.apellidoUsuario = form.apellido;
      this.newUsuario.telefonoUsuario = form.telefono;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.categoriaUsuario = form.categoria;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario = form.confirmaPass;

      this.registroService.getUsuarios().then(datos=>{
        this.usuarios = datos;

        if (!datos || datos.length==0){
          this.registroService.addDatos(this.newUsuario).then(dato=>{
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario creado satisfactoriamente');
          });
          this.formularioRegistro.reset();
          this.navController.navigateRoot('login');
        }else{
          for (let obj of this.usuarios){
            if (this.newUsuario.correoUsuario == obj.correoUsuario){
              existe = 1;
            }
          }//Fin del for
            if (existe == 1){
              this.alertCorreoDuplicado();
              this.formularioRegistro.reset();
            }else{
              this.registroService.addDatos(this.newUsuario).then(dato=>{
                this.newUsuario=<Usuario>{};
                this.showToast('Usuario creado satisfactoriamente')
              });
              this.formularioRegistro.reset();
              this.navController.navigateRoot('login');
            }
          }
          })
    }
    }


  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }
  
  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Acpetar']
    })
    await alert.present();
  }
  
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

  usuario={
    nombre:'',
    apellido:'',
    telefono:'',
    correo:'',
    categoria:'',
    password:'',
    password2:'',
  }


  }


