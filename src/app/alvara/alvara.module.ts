import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AlvaraRoutingModule } from './alvara-routing.module';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgModule } from '@angular/core';



@NgModule({
  declarations: [AlvaraListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlvaraRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
    
  ]
})
export class AlvaraModule { }
