import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DevolucaoService } from './devolucao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-devolucao',
  templateUrl: './devolucao.component.html',
  styleUrls: ['./devolucao.component.css']
})
export class DevolucaoComponent implements OnInit {


dev: any = "";
idbotao: string ="";


  constructor(private service: DevolucaoService, private location: Location, private router: Router) { }


  
  
         
  ngOnInit(): void {
    this.service.list().subscribe(dados => this.dev =dados)
    console.log(this.dev)
  }; 


  devolucao(idbotao: any){
    console.log(idbotao)
    this.service.devolucao(idbotao).subscribe(
      success => {console.log('sucesso');
     location.reload()},
    error=> console.error(error),
    ()=> console.log('request completo')
  );
    
  };


  renovacao(idbotao: any){
    console.log(idbotao)
  }
  

}
