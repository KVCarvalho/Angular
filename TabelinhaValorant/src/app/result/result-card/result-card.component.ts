import { Component, Input } from '@angular/core';
import { configurations } from 'src/environments/interfaces/configurations';


@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent {


@Input()
roleIcon: string = "";
@Input()
portrait: string = "";
@Input()
iconPrimary: string = "";
@Input()
iconSecondary: string = "";
@Input()
background: string = "";

@Input()
colors0: string = "";
@Input()
colors1: string = "";
@Input()
colors2: string = "";
@Input()
colors3: string = "";

isEnableBlock = false;
private configs!: configurations;


constructor(){

  this.configs = JSON.parse(localStorage.getItem("configurations") ?? "")
  if (this.configs.gunsIncluded) {
    this.isEnableBlock = true;
  } else {
    this.isEnableBlock = false;
  }

}


getBackgroundForElement(): { [klass: string]: any; }|null|undefined {
    return {
      'background-image': `url(${this.background})`
    }
  }
getColorsForElement(): { [klass: string]: any; }|null|undefined {
    return {
      'background':   `radial-gradient(circle, #${this.colors0}, #${this.colors1},#${this.colors2},#${this.colors3})`//Não usa ponto e vírgula
    }
  }
}
