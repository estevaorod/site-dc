import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CardComponent } from './card/card.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DivisorComponent } from './divisor/divisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicosComponent,
    CardComponent,
    ExperienciasComponent,
    ParceirosComponent,
    ClientesComponent,
    TecnologiasComponent,
    RodapeComponent,
    DivisorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
