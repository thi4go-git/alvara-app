import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/alvara.service';
import { Alvara } from '../alvara';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alvara-lista',
  templateUrl: './alvara-lista.component.html',
  styleUrls: ['./alvara-lista.component.css']
})
export class AlvaraListaComponent implements OnInit {


  lista: Alvara[] = [];
  colunas = ['id', 'Tipo', 'numeroAlvara',
    'nomeEmpresa', 'cnpjEmpresa', 'cnaePrincipal', 'enderecoEmpresa',
    'dataEmissao', 'pdf'];

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.service.listarTodos()
      .subscribe(resposta => {
        this.lista = resposta;
        console.log(resposta);
      }, responseError => {
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });

      });

  }





}
