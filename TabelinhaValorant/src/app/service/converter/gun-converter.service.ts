import { Injectable } from '@angular/core';
import { gun } from 'src/environments/interfaces/gun';
import { gunJson } from 'src/environments/interfaces/gunJson';

@Injectable({
  providedIn: 'root'
})
export class GunConverterService {
private gunMatrix: gun[][] = [[],[]];
private defaultGun: gun = {
  id: "null",
  category: "",
  icon: ""
}

  constructor() { }

  gunMaker(indice: number, list: gunJson[]): gun{

    const gunTS: gun = {
      id: list[indice].uuid,
      category: list[indice].category,
      icon: list[indice].displayIcon
    }
    return gunTS;
  }

  converter(list: gunJson[]){
  this.gunMatrix[0] = list.map((x: gunJson, indice: number) => x && x.category === "EEquippableCategory::Sidearm" ? this.gunMaker(indice, list) : this.defaultGun);
  this.gunMatrix[0] = this.gunMatrix[0].filter(x => x.id !== "null"); 

  this.gunMatrix[1] = list.map((x: gunJson, indice: number) => x && x.category !== "EEquippableCategory::Sidearm" ? this.gunMaker(indice, list) : this.defaultGun);

  this.gunMatrix[1] = this.gunMatrix[1].filter(x => x.id !== "null" && x.id !== "2f59173c-4bed-b6c3-2191-dea9b58be9c7" );  
  localStorage.removeItem("gunMatrix");
  localStorage.setItem("gunMatrix", JSON.stringify(this.gunMatrix));
  localStorage.setItem("isInLocalStorage", "true");
  }
}
/*if (this.configurations.justOne) {
  this.choosenPrimary = this.agentRandomizer.getRandomInt(this.matrix[1].length);
  this.choosenSecondary = this.agentRandomizer.getRandomInt(this.matrix[0].length);
  for (let index = 0; index < this.configurations.numberPlayers; index++) {
    this.choosenList.push(this.choosenMaker(this.choosenPrimary, this.choosenSecondary));
  }
} else {*/