import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';


const routes: Routes = [
  {
    path: 'preferencias', component: LayoutComponent, children: [
      { path: 'form', component: PreferenciasFormComponent },
      { path: '', redirectTo: '/preferencias/form', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }
