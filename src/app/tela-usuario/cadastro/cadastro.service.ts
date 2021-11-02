import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators';


@Injectable()
export class CadastroService{
    constructor (private http: HttpClient){}
    formulario: any;
    private readonly API = 'http://localhost:3000/livros'
    

    postLivros(formulario: any){
        return this.http.post(this.API,formulario).pipe(take(1))


    }
  
    }
