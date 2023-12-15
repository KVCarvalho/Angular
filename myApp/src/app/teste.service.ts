import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private baseUrl = ""
  constructor() { }
  getAgent(){
      this.baseUrl = environment.agentUrl;
  }
}
