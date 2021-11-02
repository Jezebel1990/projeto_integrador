import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior-usuario',
  templateUrl: './menu-superior-usuario.component.html',
  styleUrls: ['./menu-superior-usuario.component.css']
})
export class MenuSuperiorUsuarioComponent implements OnInit {

  logo = "./assets/img/logo.png"
  imagem_inicial = "./assets/img/tela_inicial.png"


  constructor() { }

  ngOnInit(): void {
  }

}
