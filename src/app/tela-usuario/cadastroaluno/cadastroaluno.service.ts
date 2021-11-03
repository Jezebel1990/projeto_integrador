import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable()

export class CadastroAlunoService {
  constructor (private http: HttpClient){}
  formularioAluno: any;
  private readonly API = 'http://localhost:3000/alunos'
  

  postAlunos(formularioAluno: any){
      console.log(formularioAluno)
      return this.http.post(this.API,formularioAluno).pipe(take(1))


  }

  }