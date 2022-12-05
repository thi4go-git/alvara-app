import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';


const routes: Routes = [
  {
    path: 'alvara', component: LayoutComponent, children: [
      { path: 'lista', component: AlvaraListaComponent },
      { path: '', redirectTo: '/alvara/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlvaraRoutingModule { }
