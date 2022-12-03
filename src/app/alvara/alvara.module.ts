import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlvaraRoutingModule } from './alvara-routing.module';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AlvaraListaComponent],
  imports: [
    CommonModule,
    AlvaraRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AlvaraModule { }
