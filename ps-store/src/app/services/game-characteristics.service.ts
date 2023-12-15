import { Injectable } from '@angular/core';
import { dataFake } from "../../dataFake/dataFake";

@Injectable({
  providedIn: 'root'
})
export class GameCharacteristicsService {
  private identifier: number = 0; // Substituição de variável de environment por variável local
  constructor() {}

  getGameInfo(){
    return dataFake[this.identifier];
  }
  beIdentificator(){
    this.identifier++;
  }
  
}
