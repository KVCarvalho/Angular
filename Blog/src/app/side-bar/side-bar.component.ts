import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  cards: number[] = [];

  @Input()
  noticemainimg: String = "";
  @Input()
  noticetitle: String = "";
  @Input()
  sidetitle: String = "";

  constructor(){
    this.cards = [0, 1, 2, 3]
  }
}
