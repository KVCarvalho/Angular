import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    GameCardComponent,
    CardImgComponent,
    CardDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
