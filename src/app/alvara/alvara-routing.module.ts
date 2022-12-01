import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';


const routes: Routes = [
  { path: 'alvara-lista', component: AlvaraListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlvaraRoutingModule { }
