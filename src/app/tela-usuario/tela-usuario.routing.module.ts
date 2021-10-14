import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import{TelaUsuarioComponent} from './tela-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

const TelaUsuarioroutes: Routes = [
  
    {path: 'usuario', component:TelaUsuarioComponent, children:[
    {path: 'cadastro', component:CadastroComponent},
    {path: 'emprestimo', component:EmprestimoComponent},
    {path: 'devolucao', component:DevolucaoComponent}]},
      
    
    //{path: 'usuario/cadastro', component:CadastroComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forChild(TelaUsuarioroutes),
              
  ],
  exports: [RouterModule],
  declarations: [
    CadastroAlunoComponent
  ]
})
export class TelaUsuarioRoutingModule { }
