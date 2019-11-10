import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {

  constructor(private dbFirestore:AngularFirestore) { }

  /*
  Verifica que el usuario exista
  */
  verificarUsuario(correo:string,clave:String){
    return new Promise((resolve,rejected)=>{

      this.dbFirestore.collection('usuarios').doc(correo).valueChanges().subscribe((user:any)=>{
        console.log(user);
        if(user){

          if(user.clave==clave){
            resolve(user);
          }else{
            rejected("Error: La contraseña es incorrecta");
          }
        }else{
          rejected("Error: El usuario no existe");
        }
        
      });

    })
  }

  

/*carga un dueño o supervisor a la bd, su id será el dni->(también lo tienen los clientes y empleados)*/  
cargarUsuario(usuarioNuevo:any){

    return new Promise((resolve,rejected)=>{

      this.dbFirestore.collection("usuarios").doc(usuarioNuevo.correo).set({
      
        nombre:usuarioNuevo.nombre,
        apellido:usuarioNuevo.apellido,
        correo:usuarioNuevo.correo,
        clave:usuarioNuevo.clave,
        tipo:usuarioNuevo.tipo,
        foto:usuarioNuevo.foto

    }).then(()=>{
      resolve(usuarioNuevo);
    }).catch((error)=>{
      rejected(error);
    });
  })
}

//Cargar cliente a la bd
traerEspecialistas() {
  let usuarios=new Array();
  return new Promise((resolve,rejected)=>{
  this.dbFirestore.collection('usuarios').get().subscribe((user)=>{
    user.docs.map(user=>{
      if(user.data().perfil=="especialista"){
        usuarios.push(user.data());
      }
      
    });
  })
  resolve(usuarios);
})

}





//Cargar cliente anonimo a la bd
cargarClienteAnonimo(usuarioNuevo:any) {
  return new Promise((resolve,rejected)=>{

    this.dbFirestore.collection("usuarios").doc(usuarioNuevo.dni.toString()).set({
    
    nombre:usuarioNuevo.nombre,
    dni:usuarioNuevo.dni,
    foto:usuarioNuevo.foto,
    clave:usuarioNuevo.clave,
    perfil:"clienteAnonimo",

  }).then(()=>{
    resolve(usuarioNuevo);
  }).catch((error)=>{
    rejected(error);
  });
})
}

//Carga un producto a la Base de Datos 
cargarProducto(productoNuevo:any) {
  return new Promise((resolve,rejected)=>{

    this.dbFirestore.collection("productos").doc(productoNuevo.nombre).set({
    
    nombre:productoNuevo.nombre,
    descripcion:productoNuevo.descripcion,
    tiempoElab:productoNuevo.tiempoElab,
    precio:productoNuevo.precio,
    foto1:productoNuevo.foto1,
    foto2:productoNuevo.foto1,
    foto3:productoNuevo.foto1,

    
  }).then(()=>{
    resolve(productoNuevo);
  }).catch((error)=>{
    rejected(error);
  });
})
}

}

export interface Especialista{
  
  correo:string;
}
