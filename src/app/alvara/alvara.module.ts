import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AlvaraRoutingModule } from './alvara-routing.module';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgModule } from '@angular/core';
import { AlvaraFormComponent } from './alvara-form/alvara-form.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AlvaraListaComponent, AlvaraFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlvaraRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule
  ]
})
export class AlvaraModule { }
