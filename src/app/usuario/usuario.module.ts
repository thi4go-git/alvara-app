import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    UsuarioListComponent,
    UsuarioFormComponent
  ]

})
export class UsuarioModule { }
