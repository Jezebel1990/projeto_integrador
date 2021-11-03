import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CadastroAlunoService } from './cadastroaluno.service';

@Component({
  selector: 'app-cadastroaluno',
  templateUrl: './cadastroaluno.component.html',
  styleUrls: ['./cadastroaluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  id: string = "" ;
  nome: string = "";
  

  constructor(private cadastroAlunoService: CadastroAlunoService) { 
  this.cadastroAlunoService = cadastroAlunoService;}
  
  ngOnInit(): void {
  }

  formaluno(form: any){
    
    this.cadastroAlunoService.postAlunos(form.value).subscribe(
      success => {console.log('sucesso');
                 this.limpar()},
                 error=> console.error(error),
                 ()=> console.log('request completo')
               );

  }

  limpar(){
    this.id="";
    this.nome="" ;
    
  }
}