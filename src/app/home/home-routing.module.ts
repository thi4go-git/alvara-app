import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  {
    path: 'home', component: LayoutComponent, canActivate: [AuthGuard], canLoad: [AuthGuard], children: [
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: '/home/inicio', pathMatch: 'full' },
      { path: '**', component: PaginaNaoEncontradaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
