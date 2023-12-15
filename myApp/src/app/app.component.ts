import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
/* LIFE CYCLE
  isAliveLyfeCicle: boolean = true;

  killit(){
    if (this.isAliveLyfeCicle === true) {
      this.isAliveLyfeCicle = false;
    } else{
      this.isAliveLyfeCicle =true;
    }
  }*/
  /*
  isAliveSPage: boolean = true;

  isalive (state: boolean = true){
    if (state !== true) {
      this.isAliveSPage = true;
    } else {
      this.isAliveSPage = false;
    }
  }*/
}
