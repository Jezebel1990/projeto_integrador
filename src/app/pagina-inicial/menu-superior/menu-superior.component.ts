import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  logo = "./assets/img/logo.png"
  imagem_inicial = "./assets/img/tela_inicial.png"

  constructor() { }

  ngOnInit(): void {
  }

}
