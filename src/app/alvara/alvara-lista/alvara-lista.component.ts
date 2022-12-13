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
  listaAlvaras: Alvara[] = [];

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
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        if (this.listaAlvaras.length == 0) {
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
        console.log(consultaParam);
        if (consultaParam == 'venceApos60dias') {          
          this.listarVencerApos60Dias(pagina = 0, tamanho = 10);
        } else {
          if (consultaParam == 'venceEm60dias') {
            this.listarVencerAte60Dias();            
          }
        }
      }
    });
  }


  listarVencidos(pagina = 0, tamanho = 10) {
    this.service.listarVencidos(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao Obter listarVencidos!", "ERRO!", {
          duration: 2000
        });

      }
      );
  }


  listarSemInformacoes(pagina = 0, tamanho = 10) {
    this.service.listarSemInformacoes(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao Obter listarSemInformacoes!", "ERRO!", {
          duration: 2000
        });

      }
      );
  }


  listarVencerApos60Dias(pagina = 0, tamanho = 10) {
    this.service.listarVencerApos60Dias(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        console.log(this.listaAlvaras);
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao Obter listarVencerApos60Dias!", "ERRO!", {
          duration: 2000
        });

      }
      );
  }


  listarVencerAte60Dias(pagina = 0, tamanho = 10) {
    this.service.listarVencerAte60Dias(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        console.log(this.listaAlvaras);
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao Obter listarVencerAte60Dias!", "ERRO!", {
          duration: 2000
        });

      }
      );
  }


  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarArquivos(this.pagina, this.tamanho);
  }


  consultarAlvaraPorNome(pagina = 0, tamanho = 10) {
    this.service.listarPorNome(pagina, tamanho, this.nome)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        if (this.listaAlvaras.length == 0) {
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




