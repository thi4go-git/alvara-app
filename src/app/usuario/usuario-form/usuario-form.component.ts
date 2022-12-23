import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioDTO } from '../UsuarioDTO';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarioDto: UsuarioDTO;
  formulario: FormGroup;
  listaErros: string[];

  constructor(
    private formBuild: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService,
    private router: Router
  ) {
    this.usuarioDto = new UsuarioDTO();
    this.listaErros = [];
  }

  ngOnInit(): void {
    this.montarFormulario();
  }


  montarFormulario() {
    this.formulario = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
    })
  }

  onSubmit() {
    this.salvarContato();
  }

  salvarContato() {

    const formValues = this.formulario.value;
    let usuario: UsuarioDTO = new UsuarioDTO();
    usuario.username = formValues.username;
    usuario.password = formValues.password;
    usuario.nome = formValues.nome;
    usuario.cpf = formValues.cpf;
    this.service
      .salvarUsuario(usuario)
      .subscribe(resposta => {
        this.snackBar.open("SUCESSO ao salvar Usuário!", "SUCESSO!", {
          duration: 2000
        });
        this.router.navigate(['/preferencias/form'])
      }, errorResponse => {
        this.listaErros = errorResponse.error.erros
        this.snackBar.open("ERRO ao salvar Usuário!!", "ERRO!", {
          duration: 2000
        });
      })
  }


  voltarPreferencias() {
    this.router.navigate(['/preferencias/form'])
  }
}
