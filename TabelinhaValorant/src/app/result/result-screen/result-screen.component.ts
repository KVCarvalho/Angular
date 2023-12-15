import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConsumeService } from 'src/app/service/converter/api-consume.service';
import { CoreRandomizerService } from 'src/app/service/randomizer/core-randomizer.service';
import { StratRandomizerService } from 'src/app/service/randomizer/strat-randomizer.service';
import { choosen } from 'src/environments/interfaces/choosen';
import { configurations } from 'src/environments/interfaces/configurations';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent {

  stratList: String[] = []
  choosenList: choosen[]=[];
  isEnableBlock: boolean = false;
  private configs!: configurations;

  constructor(
    private apiConsume: ApiConsumeService, private coreRandomizer: CoreRandomizerService, private stratRandomizer: StratRandomizerService,
    private route: Router
    ){

    this.apiConsume.consumeAPI(true);
    this.apiConsume.consumeAPI(false);

    this.configs = JSON.parse(localStorage.getItem('configurations') ?? 'configurations');
    this.choosenList = this.coreRandomizer.randomizer();

    if (this.configs.stratsIncluded) {
      this.isEnableBlock = true;
      this.stratList = this.stratRandomizer.randomizer();
    } else {
      this.isEnableBlock = false;
    }
    


  }
  backConfig() {
      this.route.navigate(['']);
    }
    reload() {
      window.location.reload();
    }
}
