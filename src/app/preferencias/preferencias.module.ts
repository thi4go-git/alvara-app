import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenciasRoutingModule } from './preferencias-routing.module';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [PreferenciasFormComponent],
  imports: [
    CommonModule,
    PreferenciasRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class PreferenciasModule { }
