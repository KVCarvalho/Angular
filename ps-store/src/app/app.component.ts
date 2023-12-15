import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps-store';
  
  cards: number[] = [];
  
  constructor(){
    this.cards = [0, 1, 2]//decorator com enviroment
  }
  
}
