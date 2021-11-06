import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { TelaUsuarioModule } from './tela-usuario/tela-usuario.modue';
import { CadastroService } from './tela-usuario/cadastro/cadastro.service';
import { CadastroAlunoService } from './tela-usuario/cadastroaluno/cadastroaluno.service';
import { CadastroComponent } from './tela-usuario/cadastro/cadastro.component';






@NgModule({
  declarations: [

    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PaginaInicialModule,
    TelaUsuarioModule,
  
    
    AppRoutingModule,
    
  ],
  providers: [CadastroService, CadastroAlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
