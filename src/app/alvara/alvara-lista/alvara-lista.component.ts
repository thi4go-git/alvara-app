import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/alvara.service';
import { Alvara } from '../alvara';

import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { strict } from 'assert';



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
  tipoConsulta: string;


  lista: Alvara[] = [];
  colunas = ['id', 'tipoDoc', 'nomeArquivo',
    'numeroAlvara', 'nomeEmpresa',
    'cnpjEmpresa', 'dataEmissao', 'dataVencimento', 'expira', 'pdf'];

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.listarArquivos();
    this.listarPersonalizado();
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



  listarPersonalizado(pagina = 0, tamanho = 10) {
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro.tipoConsulta) {
        let consultaParam: String = parametro.tipoConsulta;
        //
        if (consultaParam == 'venceApos60dias') {
          this.service.listarVencerApos60Dias(pagina, tamanho)
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
              this.snackBar.open("Erro ao Obter listarPersonalizado!", "ERRO!", {
                duration: 2000
              });

            }
            );
        }


      }
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

  baixar(alvara: Alvara) {
    var sampleArr = this.base64ToArrayBuffer(alvara.pdf);
    this.saveByteArray(alvara.nomeArquivo, sampleArr);
  }

  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  saveByteArray(reportName, byte) {
    var blob = new Blob([byte], { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };

}




