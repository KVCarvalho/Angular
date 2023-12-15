import { Injectable } from '@angular/core';
import { agentJson } from "../../../environments/interfaces/agentJson";
import { agent } from "../../../environments/interfaces/agent";
@Injectable({
  providedIn: 'root'
})
export class AgentConverterService {

  roleArray: String = "";
  agentMatrix: agent[][] = [[],[],[],[]];

  private defaultAgent: agent = {
    id: "null",
    portrait: '',
    background: '',
    colors: [],
    roleIcon: ''
  }

  constructor() { }

  agentMaker(indice:number, list: agentJson[]): agent {
    const agentTS: agent = {
      id: list[indice].uuid,
      roleIcon: list[indice].role.displayIcon,
      portrait: list[indice].fullPortrait,
      background: list[indice].background,
      colors: list[indice].backgroundGradientColors.map((x: string) => x),
    }
    return agentTS;
  }

  converter(list: agentJson[]){ // tinha um any
    for (let index = 0; index < 4; index++) {

      switch (index) {
        case 0:
          this.roleArray = "Initiator"
          break;
        case 1:
          this.roleArray = "Controller"
          break;
        case 2:
          this.roleArray = "Sentinel"
          break;
        case 3:
          this.roleArray = "Duelist"
          break;
        default:
          break;
      }

    this.agentMatrix[index] = list.map((x: agentJson,indice: number) => x && x.role && x.role.displayName === this.roleArray && x.isPlayableCharacter ? this.agentMaker(indice, list) : this.defaultAgent ); // x valor de list
    this.agentMatrix[index] = this.agentMatrix[index].filter(x => x.id !== "null");
  }
  localStorage.removeItem("agentMatrix");
  localStorage.setItem("agentMatrix", JSON.stringify(this.agentMatrix));
  }
}
