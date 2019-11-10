import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { EspecialistaComponent } from './paginas/especialista/especialista.component';
import { AltasComponent } from './paginas/administrador/altas/altas.component';
import { EstadisticasComponent } from './paginas/administrador/estadisticas/estadisticas.component';
import { AltaTurnoComponent } from './paginas/cliente/alta-turno/alta-turno.component';

//import {HttpClientModule} from '@angular/common/http';


var firebaseConfig = {
  apiKey: "AIzaSyAN3Q11LmMijAus80x9yZBfyMAF2mbP9pA",
  authDomain: "tp-buenasonrisa.firebaseapp.com",
  databaseURL: "https://tp-buenasonrisa.firebaseio.com",
  projectId: "tp-buenasonrisa",
  storageBucket: "tp-buenasonrisa.appspot.com",
  messagingSenderId: "763075254216",
  appId: "1:763075254216:web:f06e5d5b18188241ac12fd"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    ClienteComponent,
    EspecialistaComponent,
    AltasComponent,
    EstadisticasComponent,
    AltaTurnoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    //HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
