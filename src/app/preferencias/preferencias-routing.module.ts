import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';


const routes: Routes = [
  { path: 'preferencias-form', component: PreferenciasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }
