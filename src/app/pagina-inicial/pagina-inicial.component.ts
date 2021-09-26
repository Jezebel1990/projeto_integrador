import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  logo = "./assets/img/logo.png"
  imagem_inicial = "./assets/img/tela_inicial.png"

  constructor() { }

  ngOnInit(): void {
  }

}
