import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { EspecialistaComponent } from './paginas/especialista/especialista.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { AltasComponent } from './paginas/administrador/altas/altas.component';
import { EstadisticasComponent } from './paginas/administrador/estadisticas/estadisticas.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
//admin
  {path:'menu-admin',component:AdministradorComponent},
  {path:'altas-admin',component:AltasComponent},
  {path:'estadisticas-admin',component:EstadisticasComponent},
  
//cliente
  {path:'menu-cliente',component:ClienteComponent},

  //especialista
  {path:'menu-especialista',component:EspecialistaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
