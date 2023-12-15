import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationScreenComponent } from './configuration-screen/configuration-screen.component';
import { ResultScreenComponent } from './result/result-screen/result-screen.component';
import { ResultCardComponent } from './result/result-card/result-card.component';




@NgModule({
  declarations: [
    AppComponent,
    ConfigurationScreenComponent,
    ResultScreenComponent,
    ResultCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
