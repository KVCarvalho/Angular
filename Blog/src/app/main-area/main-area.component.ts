import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent {
  cards: number[] = [];

  @Input()
  noticemainimg: String = "";
  @Input()
  noticetitle: String = "";
  @Input()
  shortnotice: String = ""
  @Input()
  noticedate: String = "";
  @Input()
  identifier: number = 0;
  
  constructor(){
    this.cards = [0, 1, 2, 3]
  }
}
