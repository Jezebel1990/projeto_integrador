import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TelaUsuarioComponent } from './tela-usuario.component';
import { MenuSuperiorUsuarioComponent } from './menu-superior-usuario/menu-superior-usuario.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { TelaUsuarioRoutingModule } from './tela-usuario.routing.module';
import { CadastroAlunoComponent } from './cadastroaluno/cadastroaluno.component';




@NgModule({
  declarations: [
    TelaUsuarioComponent,
    MenuSuperiorUsuarioComponent,
    MenuLateralComponent,
    CadastroComponent,
    EmprestimoComponent,
    DevolucaoComponent,
    CadastroAlunoComponent,
       
  ],
  imports: [
    CommonModule,
    TelaUsuarioRoutingModule,
    FormsModule,
    HttpClientModule
  ]
   
})
export class TelaUsuarioModule { }