import { Injectable } from '@angular/core';
import { agentRandomizerService } from './agentRandomizer.service';

@Injectable({
  providedIn: 'root'
})
export class StratRandomizerService {
  private stratMatrix: string [][] = [[
    "Switch kill", "Até o fim", "Sem plant", "X1", "Foguete nao tem ré"
  ],[
    "Troll aim", "No Spray", "Full Spray", "Coringa"
  ],[
    "Ult 1 round", "Sem ult", "1 Skill", "Coringa"
  ]]
  private choosenStrats: string[] = [];

  constructor(private agentRandomizer: agentRandomizerService) { }
  randomizer(){  
      for (let index = 0; index < 3; index++) {
        this.choosenStrats.push(this.stratMatrix[index][this.agentRandomizer.getRandomInt(this.stratMatrix[index].length)]) 
      }
    
    return this.choosenStrats;
  }
  //
}
