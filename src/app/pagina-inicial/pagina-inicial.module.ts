import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppRoutingModule } from './pagina-inicial-routing.module';
import { RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { TelaPrincipalRoutingModule } from './pagina-inicial.routing.module';

@NgModule({
  declarations: [
    PaginaInicialComponent,
    TelaLoginComponent,
    MenuSuperiorComponent,
   
  ],
  imports: [
    CommonModule,
    TelaPrincipalRoutingModule,
   //RouterModule,
    
  ]
})
export class PaginaInicialModule { }
