import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent {
  @Input()
  coverImg: String = "";
  @Input()
  isExclusive: String = ""; //<--usar como método de troca
  
}
