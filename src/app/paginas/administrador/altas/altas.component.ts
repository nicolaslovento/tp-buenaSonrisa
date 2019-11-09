import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  correo:string="";
  nombre:string="";
  apellido:string="";
  clave:string="";
  tipo="";
  mostrarError=false;
  error="";
  constructor() { }

  ngOnInit() {
  }

  verificarErrorRegistro(){

    console.log(this.tipo);
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

    if(this.tipo==""){

      this.error="Debe elegir un tipo.";
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

  registrar(){
    
    if(!this.verificarErrorRegistro()){
      alert("bienvenido");
    }
  }

}
