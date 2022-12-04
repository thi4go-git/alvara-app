import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/alvara.service';
import { Alvara } from '../alvara';



import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-alvara-lista',
  templateUrl: './alvara-lista.component.html',
  styleUrls: ['./alvara-lista.component.css']
})
export class AlvaraListaComponent implements OnInit {

  totalElementos = 0;
  pagina;
  tamanho;
  pageSizeOptions: number[] = [10];
  //
  nome: string = "";


  lista: Alvara[] = [];
  colunas = ['id', 'tipoDoc', 'nomeArquivo',
    'numeroAlvara', 'nomeEmpresa',
    'cnpjEmpresa', 'dataEmissao', 'dataVencimento', 'expira', 'pdf'];

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listarArquivos();
  }


  listarArquivos(pagina = 0, tamanho = 10) {
    this.service.listarTodos(pagina, tamanho)
      .subscribe(resposta => {
        this.lista = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;

        if (this.lista.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, responseError => {

        console.log(responseError);
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });

      });
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarArquivos(this.pagina, this.tamanho);
  }


  consultarAlvaraPorNome(pagina = 0, tamanho = 10) {
    this.service.listarPorNome(pagina, tamanho, this.nome)
      .subscribe(resposta => {
        this.lista = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;

        if (this.lista.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });

      }
      );

  }

}
