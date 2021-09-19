import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { TelaUsuarioModule } from './tela-usuario/tela-usuario.modue';



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
