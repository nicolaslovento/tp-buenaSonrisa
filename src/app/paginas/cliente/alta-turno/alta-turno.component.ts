import { Component, OnInit } from '@angular/core';
import { CloudFirestoreService } from 'src/app/servicios/cloud-firestore.service';
import { Router } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.css']
})
export class AltaTurnoComponent implements OnInit {

  especialistas=new Array();
  constructor(
    private serviceFirestore:CloudFirestoreService,
    private router:Router
  ) { 
    
   
  }

  ngOnInit() {
    
    this.cargarEspecialistas();
    
}

async cargarEspecialistas(){
  this.especialistas=[];
  await this.serviceFirestore.traerEspecialistas().then((usuarios:any)=>{
    
    this.especialistas=usuarios;
  });
  
}

  

}
