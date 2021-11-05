import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { TelaUsuarioModule } from './tela-usuario/tela-usuario.modue';


const routes: Routes = [
  
    {path: '', component: PaginaInicialComponent},
    
       
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PaginaInicialModule,
    TelaUsuarioModule,
          
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
