import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [UsuarioListComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatIconModule
  ],
  exports: [
    UsuarioListComponent
  ]

})
export class UsuarioModule { }
