import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  usuarioLogado: string = "Deslogado";
  authorities: string[] = [''];
  administrador: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.authorities = this.authService.getAuthorities();
    for (let cont = 0; cont < this.authorities.length; cont++) {
      let role = this.authorities[cont];
      if (role == "ROLE_ADMIN") {
        this.administrador = true;
        break;
      }
    }
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }


}
