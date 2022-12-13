import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { AlvaraFormComponent } from './alvara-form/alvara-form.component';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';


const routes: Routes = [
  {
    path: 'alvara', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'lista', component: AlvaraListaComponent },
      { path: 'form', component: AlvaraFormComponent },
      { path: 'form/:id', component: AlvaraFormComponent },
      { path: 'lista/:tipoConsulta', component: AlvaraListaComponent },
      { path: '', redirectTo: '/alvara/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlvaraRoutingModule { }
