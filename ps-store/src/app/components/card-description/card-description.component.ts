import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent {
@Input()
 buyOrPlay: String = "";
 @Input()
 plataform: String = "";
 @Input()
 isFullGame: String = "";
 @Input()
 price: String = "";
}
