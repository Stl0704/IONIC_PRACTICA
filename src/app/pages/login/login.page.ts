import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //CLASE 3.1 MODELOS

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  isAlertOpen = false;
  public alertButtons = ['OK']; // ACA PUEDES AGREGAR VARIOS ID DE BOTONES QUE CUMPLAN LA FUNCION
  mensaje: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navegar() {

    //Clase 2 --> CLASE 3.2, AGREGAMOS LA LOGICA IF POR MDL USUARIO Y CONTRASENIA. UNIDAD 2


    if (this.mdl_usuario == '' && this.mdl_contrasena == '') {
      this.mensaje = 'Debe ingresar valores';
      this.isAlertOpen = true;
    } 
    else {
          if (this.mdl_usuario == 'MARIO' && this.mdl_contrasena == '123') {
            //parametros para navegacion
            let parametros: NavigationExtras = {
              state:{
                user: this.mdl_usuario,
                pass: this.mdl_contrasena
              }
            }

            this.router.navigate(['principal'],parametros);
          } else {
            this.mensaje = 'Credenciales Invalidas.';
            this.isAlertOpen = true;
          }
        }
      }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
