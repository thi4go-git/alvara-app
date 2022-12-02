import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { PreferenciasModule } from './preferencias/preferencias.module';
import { AlvaraModule } from './alvara/alvara.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PreferenciasModule,
    AlvaraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
