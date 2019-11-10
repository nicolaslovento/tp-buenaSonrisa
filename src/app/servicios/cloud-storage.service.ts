import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {

 

  constructor(private fireStorage:AngularFireStorage) { }

  subirArchivo(file:any){

    var linkFoto="";
    return new Promise((resolve,rejected)=>{
    const ref=this.fireStorage.ref(file.name);
    ref.put(file).then(async()=>{
      this.fireStorage.ref(file.name).getDownloadURL().subscribe(async(link)=>{
        resolve(link);
      })
    })

  })
}

}
