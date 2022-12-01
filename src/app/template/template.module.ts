import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [CabecalhoComponent, MenuComponent, HomeComponent, RodapeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent
  ]

})
export class TemplateModule { }
