import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { PreferenciasModule } from './preferencias/preferencias.module';
import { AlvaraModule } from './alvara/alvara.module';
import { AlvaraService } from './alvara.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    PreferenciasModule,
    AlvaraModule
  ],
  providers: [
    AlvaraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
