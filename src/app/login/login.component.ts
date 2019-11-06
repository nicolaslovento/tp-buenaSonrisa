import { Component, OnInit } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string="";
  nombre:string="";
  apellido:string="";
  clave:string="";
  claveRepetida:string="";




  mostrarRegistro=false;
  mostrarError=false;
  error="";
  constructor() { }

  ngOnInit() {
    
  }

  verificarErrorRegistro(){

    let errores=0;
    let vacios=0;

    if(this.nombre==""){

      this.error="Debe ingresar su nombre.";
      vacios++;
      
    }

    if(this.apellido==""){

      this.error="Debe ingresar su apellido.";
      vacios++;
      
    }

    if(this.correo==""){

      this.error="Debe ingresar un correo.";
      vacios++;
      
    }

    if(this.claveRepetida==""){

      this.error="Debe ingresar una clave.";
      vacios++;
      
    }

    if(this.clave==""){

      this.error="Debe ingresar una clave.";
      vacios++;
      
    }

    if(this.correo.indexOf('@')==-1){

      this.error="El correo debe tener un formato válido.";
      errores++;
      
    }

    if(this.clave.length>0 && this.clave.length<6){

      this.error="La clave debe tener al menos 6 dígitos.";
      errores++;
      
    }

    if(this.clave!=this.claveRepetida){

      this.error="La claves deben ser iguales.";
      errores++;
      
    }

    
    if(vacios>=2){
      this.mostrarError=true;
      this.error="No puede haber campos vacíos.";
      return true;
    }

    if(vacios==1){
      this.mostrarError=true;
      
      return true;
    }



    if(errores>0){
      this.mostrarError=true;
      return true;
    }
    

  }

  verificarErrorLogin(){

    let errores=0;
    let vacios=0;

    if(this.correo==""){

      this.error="Debe ingresar un correo.";
      vacios++;
      
    }

    

    if(this.clave==""){

      this.error="Debe ingresar una clave.";
      vacios++;
      
    }

    if(this.correo.indexOf('@')==-1){

      this.error="El correo debe tener un formato válido.";
      errores++;
      
    }

    if(this.clave.length>0 && this.clave.length<6){

      this.error="La clave debe tener al menos 6 dígitos.";
      errores++;
      
    }

    
    if(vacios>=2){
      this.mostrarError=true;
      this.error="No puede haber campos vacíos.";
      return true;
    }

    if(vacios==1){
      this.mostrarError=true;
      
      return true;
    }



    if(errores>0){
      this.mostrarError=true;
      return true;
    }
   
    

  }

  login(){
   
    if(!this.verificarErrorLogin()){
      alert("bienvenido");
    }

  }

  registrar(){
    
    if(!this.verificarErrorRegistro()){
      alert("bienvenido");
    }
  }


}
