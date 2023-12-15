import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ListaModule } from "./lista/lista.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SpageComponent } from './spage/spage.component';
import { DiratributosComponent } from './diratributos/diratributos.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [ //Set de componentes, diretivas e pipes
    AppComponent,
    LifeCycleComponent,
    SpageComponent,
    DiratributosComponent,
    TesteComponent,
  ],
  imports: [ //Set de NgModules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListaModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
