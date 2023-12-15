import { Injectable } from '@angular/core';
import { agent } from 'src/environments/interfaces/agent';
import { configurations } from 'src/environments/interfaces/configurations';

@Injectable({
  providedIn: 'root'
})
export class agentRandomizerService {
  private choosenList: agent[] = [];
  private matrix: agent[][] = [];
  private flex!: agent;
  private countDiff = 0;
  private choosen = 0;
  private configs!: configurations;


  constructor() { }
  
getRandomInt(arrayLength: number): number {
  arrayLength = Math.floor(arrayLength);
  return Math.floor(Math.random() * arrayLength);
}


getFlex() {
  let flexRole = this.getRandomInt(4);
  let flexAndress = this.getRandomInt(this.matrix[flexRole].length);
  return this.matrix[flexRole][flexAndress];
}
chooseAgent() {
  this.configs = JSON.parse(localStorage.getItem("configurations") ?? "erro")
  this.matrix = JSON.parse(localStorage.getItem("agentMatrix") ?? "erro");
  this.choosenList = [];
  
    for (let index = 0; index < this.configs.numberPlayers; index++) {

      
      if (index < this.configs.numberPlayers -1) {
        this.choosen = this.getRandomInt(this.matrix[index].length);
        this.choosenList.push(this.matrix[index][this.choosen]);

      } else {
        do{

          this.flex = this.getFlex();

          this.choosenList.forEach((element: agent) => {
            if (element.id !== this.flex.id) {
              this.countDiff++;
            } else {
              this.countDiff = 0;
            }
          })
        }
        while (this.countDiff < this.choosenList.length)  

        this.choosenList.push(this.flex)
      }
    }
    console.log(this.choosenList)
    return this.choosenList; 
}

}


