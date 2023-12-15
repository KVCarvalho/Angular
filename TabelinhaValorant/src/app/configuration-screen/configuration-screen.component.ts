import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration-screen',
  templateUrl: './configuration-screen.component.html',
  styleUrls: ['./configuration-screen.component.css']
})
export class ConfigurationScreenComponent implements OnInit {
  
  isEnableBlock:boolean = false;
  configurations!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
    localStorage.removeItem('configurations');
  }

  ngOnInit(): void {
    this.configurations = this.formBuilder.group({
      numberPlayers: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      gunsIncluded: [false],
      justOne: [false],
      stratsIncluded: [false]
    })}
  
  isTeam() {
    this.isEnableBlock = !this.isEnableBlock;
  }
  ensureConfig(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem("configurations");
        if (this.configurations.valid) {
          localStorage.setItem('configurations', JSON.stringify(this.configurations.value));
        } else {
          window.location.reload();
        } 
        resolve('Formulário salvo com sucesso no localStorage');
      } catch (error) {
        reject('Erro ao salvar o formulário no localStorage');
      }
    });
    
  }

  enterConfig(){
    this.ensureConfig().then(() => {
      this.router.navigate(['/result'])
    }) .catch(error => {
      console.error('Erro ao processar LocalStorage:', error);
    });
  }
}
