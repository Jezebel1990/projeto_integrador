import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  API = 'Api/';
  
  constructor(private http:HttpClient) { }

  list(){
    
   
    return this.http.get(this.API);
  }

  devolucao(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
 
}
}