import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmprestimoService } from './emprestimo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {


emprestimos: any = "";
idbotao: string =""


  constructor(private service: EmprestimoService, private location: Location, private router: Router) { }


  
  
  
  ngOnInit(): void {
    this.service.list().subscribe(dados => this.emprestimos =dados)
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
