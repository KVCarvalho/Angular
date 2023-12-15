import { Component } from '@angular/core';
//Diretivas Estruturais
@Component({
  selector: 'app-spage',
  templateUrl: './spage.component.html',
  styleUrls: ['./spage.component.css']
})
export class SpageComponent {
  produtos: string[] = [];
  menuType: string = "sdmin";

  constructor(){
    this.produtos = [
      "skin",
      "game",
      "whey"
    ]
  }

  add(){
    this.produtos.push()
  }
  remover(n: number){
    this.produtos.splice(n, 1)
  }
}
