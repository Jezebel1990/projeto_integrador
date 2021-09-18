import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  
    {path: '', component:PaginaInicialComponent},
    {path: 'login',component:TelaLoginComponent}
  ];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
