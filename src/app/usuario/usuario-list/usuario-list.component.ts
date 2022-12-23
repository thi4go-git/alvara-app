import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../Usuario';
import { UsuarioInfoComponent } from '../usuario-info/usuario-info.component';



@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  constructor(
    private service: UsuarioService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }


  usuarioUpdate: Usuario;
  //
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

  novoUsuario() {
    this.router.navigate(['/usuario/form'])
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
        location.reload()
      }, erro => {
        console.log(erro);
        this.snackBar.open("erro ativarDesativar!", "Erro!", {
          duration: 2000
        });
      });
  }

  ativarDesativarAdm(usuario: Usuario) {
    this.service.ativarUsuarioAdm(usuario.id)
      .subscribe(resposta => {
        console.log(resposta);
        this.snackBar.open("SUCESSO!", "SUCESSO!", {
          duration: 2000
        });
      }, erro => {
        console.log(erro);
        this.snackBar.open("erro ativarDesativarAdm!", "Erro!", {
          duration: 2000
        });
      });
    location.reload();

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

  prepararUsuarioUpdate(usuario: Usuario) {
    this.usuarioUpdate = usuario;
  }

  infoUsuario(usuario: Usuario) {
    this.dialog.open(UsuarioInfoComponent, {
      width: '400px', height: '450px',
      data: usuario
    });
  }

}


