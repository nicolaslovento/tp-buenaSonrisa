import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudFirestoreService } from 'src/app/servicios/cloud-firestore.service';
import { CloudStorageService } from 'src/app/servicios/cloud-storage.service';

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
  file:FileList;
  usuarioNuevo=null;


  constructor(
    private router:Router,
    private serviceFirestore:CloudFirestoreService,
    private serviceStorage:CloudStorageService
    ) { }

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

      
      switch(this.tipo){
        
        case "especialista":
            
            this.usuarioNuevo={
              nombre:this.nombre,
              apellido:this.apellido,
              correo:this.correo,
              clave:this.clave,
              tipo:this.tipo,
              foto:null,
              ingresos:[],
              ocupado:false,
              turnos:[],
              turnosRealizados:0
            }

          break;
        case "recepcionista":

            this.usuarioNuevo={
              nombre:this.nombre,
              apellido:this.apellido,
              correo:this.correo,
              clave:this.clave,
              tipo:this.tipo,
              foto:null,
              

            }

          break;
        case "cliente":

            this.usuarioNuevo={
              nombre:this.nombre,
              apellido:this.apellido,
              correo:this.correo,
              clave:this.clave,
              tipo:this.tipo,
              foto:null,
              turnos:[],
              reseñas:[]
            }

          break;
      }


        

        this.obtenerLink().then(async(link)=>{
          
          this.usuarioNuevo.foto=link;
          this.serviceFirestore.cargarUsuario(this.usuarioNuevo).then(()=>{
          
            this.limpiarForm();
            
          
        }).catch((error)=>{
          
          console.log(error);
        });
          
        })


        
      }
    

}

limpiarForm(){
  this.nombre="";
  this.apellido="";
  this.correo="";
  this.clave="";
  
}



fileSubido(event){
  this.file=event.target.files;
  console.log(this.file);
  
}

async obtenerLink(){
  return new Promise((resolve,rejected)=>{
    this.serviceStorage.subirArchivo(this.file[0]).then((link)=>{
      resolve(link);
    });
  })
 
}



}
