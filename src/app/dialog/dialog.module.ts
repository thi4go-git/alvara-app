import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioInfoComponent } from './usuario-info/usuario-info.component';



@NgModule({
  declarations: [UsuarioInfoComponent],
  imports: [
    CommonModule
  ],exports:[
    UsuarioInfoComponent
  ]
})
export class DialogModule { }
