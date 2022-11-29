import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CardComponent } from './card/card.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicosComponent,
    CardComponent,
    ExperienciasComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
