import { Injectable } from '@angular/core';
import { AgentConverterService } from './agent-converter.service';
import { GunConverterService } from "./gun-converter.service";
@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {
  constructor(private agentConverter: AgentConverterService, private gunConverter: GunConverterService) { }

  private urlAgent = "https://valorant-api.com/v1/agents/";
  private urlGuns = "https://valorant-api.com/v1/weapons";
  private url:string = "";
  private isInLocalStorage = false;

  consumeAPI(agents:boolean){

    this.url = agents ? this.urlAgent : this.urlGuns;
    this.isInLocalStorage = JSON.parse(localStorage.getItem("isInLocalStorage") ?? "false")
    
    if (this.isInLocalStorage === false) {        
      fetch(this.url)
        .then((response) => response.json())
        .then((json) => json.data)
        .then((list) => {
          if (agents) {
            this.agentConverter.converter(list)
          } else {
            this.gunConverter.converter(list)
            
          }
        })
    }
  }
}
