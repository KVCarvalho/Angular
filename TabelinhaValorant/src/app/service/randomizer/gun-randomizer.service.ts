import { Injectable } from '@angular/core';
import { agentRandomizerService } from './agentRandomizer.service';
import { gun } from 'src/environments/interfaces/gun';
import { guns } from 'src/environments/interfaces/guns';
import { configurations } from 'src/environments/interfaces/configurations';

@Injectable({
  providedIn: 'root'
})
export class GunRandomizerService {
  private matrix: gun[][] = [];
  private choosenPrimary = 0;
  private choosenSecondary = 0;
  private choosenList: guns[] = [];
  private configurations!: configurations;

  constructor(private agentRandomizer: agentRandomizerService) { }
  choosenMaker(primary:number, secondary: number){
    const gunsTS: guns = {
      icon: this.matrix[1][primary].icon,
      secondIcon: this.matrix[0][secondary].icon
    }

    return gunsTS;
  }
  chooseGun(){
    this.matrix = JSON.parse(localStorage.getItem("gunMatrix") ?? "erro");
    this.configurations = JSON.parse(localStorage.getItem("configurations") ?? "erro");
    this.choosenList = [];
    
      if (this.configurations.justOne) {
        this.choosenPrimary = this.agentRandomizer.getRandomInt(this.matrix[1].length);
        this.choosenSecondary = this.agentRandomizer.getRandomInt(this.matrix[0].length);

        for (let index = 0; index < this.configurations.numberPlayers; index++) {
        this.choosenList[index] = this.choosenMaker(this.choosenPrimary, this.choosenSecondary)
        
        }
      } else {
        for (let index = 0; index < this.configurations.numberPlayers; index++) {
          this.choosenPrimary = this.agentRandomizer.getRandomInt(this.matrix[1].length);
          this.choosenSecondary = this.agentRandomizer.getRandomInt(this.matrix[0].length);
          this.choosenList[index] = this.choosenMaker(this.choosenPrimary, this.choosenSecondary)
        }
      }
    
    console.log(this.choosenList)
    return this.choosenList;
    
      
  }
}
