import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';


const routes: Routes = [
  {
    path: 'preferencias', component: LayoutComponent,
    canActivate: [AuthGuard], canLoad: [AuthGuard], children: [
      { path: 'form', component: PreferenciasFormComponent, canLoad: [AuthGuard] },
      { path: '', redirectTo: '/preferencias/form', pathMatch: 'full' },
      { path: '**', component: PaginaNaoEncontradaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }
