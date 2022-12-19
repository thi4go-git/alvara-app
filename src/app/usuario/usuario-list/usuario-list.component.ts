import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginComponent } from 'src/app/login/login.component';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../Usuario';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  constructor(private service: UsuarioService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {

  }

  totalElementos = 0;
  pagina;
  tamanho;
  pageSizeOptions: number[] = [10];
  qtdeRegistros: number;
  //
  listaUsuarios: Usuario[] = [];
  //


  colunas = ['foto', 'id', 'username', 'password',
    'role', 'ativo', 'nome', 'cpf', 'email', 'celular', 'admin'];

  ngOnInit(): void {
    this.listarUsuarios();
  }

  teste() {
    this.snackBar.open("btn", "btn!", {
      duration: 2000
    });
  }


  listarUsuarios(pagina = 0, tamanho = 10) {
    this.service.listarTodos(pagina, tamanho)
      .subscribe(resposta => {
        this.listaUsuarios = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.qtdeRegistros = this.listaUsuarios.length;
        for (let cont = 0; cont < this.listaUsuarios.length; cont++) {
          let user = this.listaUsuarios[cont];
          let roles: string[] = [user.role];
          user.admin = this.authService.isAdmin(roles);
          this.listaUsuarios[cont] = user;
        }
        if (this.listaUsuarios.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, responseError => {
        console.log(responseError);
        this.snackBar.open("Erro ao Obter Lista Usuários!", "ERRO!", {
          duration: 2000
        });
      });
  }



  ativarDesativar(usuario: Usuario) {
    this.service.ativarUsuario(usuario.id)
      .subscribe(resposta => {
        console.log(resposta);
        this.snackBar.open("SUCESSO!", "SUCESSO!", {
          duration: 2000
        });
      }, erro => {
        console.log('erro ativarDesativar');
        console.log(erro);
      });
    this.router.navigate(['/preferencias/form'])
  }

  ativarDesativarAdm(usuario: Usuario) {
    this.service.ativarUsuarioAdm(usuario.id)
      .subscribe(resposta => {
        console.log(resposta);
        
        this.snackBar.open("SUCESSO!", "SUCESSO!", {
          duration: 2000
        });
      }, erro => {
        console.log('erro ativarDesativarAdm');
        console.log(erro);
      });
    this.router.navigate(['/preferencias/form'])
  }


  uploadFoto(event, usuario: Usuario) {
    const files = event.target.files;
    if (files) {
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append("foto", foto);
      //
      this.service.uploadFoto(usuario.id, formData)
        .subscribe(response => {
          console.log("Sucesso UPLOAD " + response);
          this.listarUsuarios();
        }, responseError => {
          console.log("ERRO UPLOAD " + responseError);
        });
    }
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarUsuarios(this.pagina, this.tamanho);
  }




}
