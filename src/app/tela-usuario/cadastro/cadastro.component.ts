import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 
  titulo: string = "";
  autor: string = "";
  editora: string = "";
  assunto: string = "";
  id: string = "";
  resumo: string = "";
  
  
  constructor(private cadastroService: CadastroService, private location: Location, private router: Router) {
    this.cadastroService = cadastroService;
   }

  ngOnInit(): void {
  }

  formLivros(form: any){
    this.cadastroService.postLivros(form.value).subscribe(
      success => {console.log('sucesso');
      this.limpar()
    },
      error=> console.error(error),
      ()=> console.log('request completo')
    );
    
  }
  
  limpar(){
    this.titulo="";
    this.autor="" ;
    this.editora="";
    this.assunto = "";
    this.id="";
    this.resumo = "";

  }

}
