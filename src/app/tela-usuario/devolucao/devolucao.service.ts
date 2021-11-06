import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DevolucaoService {

  API = 'Api';
  lista:any =  [{"id":"6", "titulo":"Guerra nas estrelas", "aluno":"Ze Comeia",
    "data_de_emprestimo":"15/11/12",
    "data_de_devolucao":"15/12/12"},
    {"id":"7", "titulo":"O vento levou", "aluno":"Perna Longa",
    "data_de_emprestimo":"12/12/12",
    "data_de_devolucao":"02/01/13"}
  ];

  constructor(private http:HttpClient) { }

  list(){
    return this.lista
    //return this.http.get(this.API);
  }

  devolucao(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
 
}
}