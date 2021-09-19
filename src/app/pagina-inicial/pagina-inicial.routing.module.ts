import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import{TelaUsuarioComponent} from './tela-usuario.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const TelaPrincipalroutes: Routes = [
  
    {path: 'login', component:TelaLoginComponent},
    
  ];
  
@NgModule({
  imports: [RouterModule.forChild(TelaPrincipalroutes),
              
  ],
  exports: [RouterModule]
})
export class TelaPrincipalRoutingModule { }
