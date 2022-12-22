import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


const routes: Routes = [
  {
    path: 'usuario', component: LayoutComponent, canActivate: [AuthGuard],canLoad: [AuthGuard]  ,children: [
      { path: 'lista', component: UsuarioListComponent },
      { path: 'form', component: UsuarioFormComponent },
      { path: '', redirectTo: '/usuario/lista', pathMatch: 'full' },
      { path: '**', component: PaginaNaoEncontradaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
