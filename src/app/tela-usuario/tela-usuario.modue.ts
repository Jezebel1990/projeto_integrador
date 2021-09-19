import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TelaUsuarioComponent } from './tela-usuario.component';
import { MenuSuperiorUsuarioComponent } from './menu-superior-usuario/menu-superior-usuario.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { TelaUsuarioRoutingModule } from './tela-usuario.routing.module';





@NgModule({
  declarations: [
    TelaUsuarioComponent,
    MenuSuperiorUsuarioComponent,
    MenuLateralComponent,
    CadastroComponent,
    EmprestimoComponent,
    DevolucaoComponent,
    
  ],
  imports: [
    CommonModule,
    TelaUsuarioRoutingModule,
  ]
   
})
export class TelaUsuarioModule { }