import { Component } from '@angular/core';

@Component({
  selector: 'app-diratributos',
  templateUrl: './diratributos.component.html',
  styleUrls: ['./diratributos.component.css']
})
export class DiratributosComponent {
  estilo: string = "disable";
  corFonte: string = "green";
  item: string = "";
  lista: string[] = [];
  isEnableBlock: boolean = true;

trocac(){
    if (this.estilo === "enable") {
      this.estilo = "disable";
    } else {
      this.estilo = "enable";
    }
  }
trocas(){
  if (this.corFonte === "green") {
    this.corFonte = "yellow";
  } else {
    this.corFonte = "green";
  }
}
add(i: string){
  this.lista.push(i);
}
remover(i: number){
  this.lista.splice(i, 1);
}
troca(){
  if (this.isEnableBlock === true) {
    this.isEnableBlock = false;
  } else {
    this.isEnableBlock = true;
  }
}
  
}
