import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/alvara.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { Alvara } from '../Alvara';



@Component({
  selector: 'app-alvara-lista',
  templateUrl: './alvara-lista.component.html',
  styleUrls: ['./alvara-lista.component.css']
})
export class AlvaraListaComponent implements OnInit {

  mostraProgresso: boolean = false;

  totalElementos = 0;
  pagina;
  tamanho;
  pageSizeOptions: number[] = [10];
  qtdeRegistros: number;
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
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro.tipoConsulta) {
        this.listarPersonalizado();
      } else {
        this.listarArquivos();
      }
    });
  }


  listarArquivos(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarTodos(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
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
        if (consultaParam == 'totalVencidos') {
          this.listarVencidos();
        } else {
          if (consultaParam == 'venceEm60dias') {
            this.listarVencerEmAte60Dias();
          } else {
            if (consultaParam == 'totaDocumentosSemInfo') {
              this.listarDocumentosSemInfo();
            } else {
              if (consultaParam == 'venceApos60dias') {
                this.listarVencerApos60Dias();
              }
            }
          }
        }
      }
    });
  }


  listarVencidos(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarVencidos(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
      }, responseError => {
        console.log(responseError);
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });
      });
  }


  listarVencerEmAte60Dias(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarVencerEmAte60Dias(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
      }, responseError => {
        console.log(responseError);
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });
      });
  }

  listarDocumentosSemInfo(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarDocumentosSemInfo(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
      }, responseError => {
        console.log(responseError);
        this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
          duration: 2000
        });
      });
  }

  listarVencerApos60Dias(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarVencerApos60Dias(pagina, tamanho)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
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


  baixar(alvara: Alvara) {
    this.mostraProgresso = true;
    this.service.obterArquivoPorId(alvara.id)
      .subscribe(resposta => {
        var sampleArr = this.base64ToArrayBuffer(resposta.pdf);
        this.saveByteArray("ARQUIVO.pdf", sampleArr);
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Arquivo BAIXADO!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
      }, errorResponse => {
        console.log(errorResponse);
        this.snackBar.open("Erro ao BAIXAR Arquivo!", "ERRO!", {
          duration: 2000
        });
      }
      );
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


  consultarAlvaraPorNome(pagina = 0, tamanho = 10) {
    this.mostraProgresso = true;
    this.service.listarTodosPorNome(pagina, tamanho, this.nome)
      .subscribe(resposta => {
        this.listaAlvaras = resposta.content;
        this.totalElementos = resposta.totalElements;
        this.pagina = resposta.number;
        this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
        this.qtdeRegistros = this.listaAlvaras.length;
        if (this.listaAlvaras.length == 0) {
          this.snackBar.open("Lista Vazia!", "Info!", {
            duration: 2000
          });
        }
        this.mostraProgresso = false;
      }, responseError => {
        this.snackBar.open("Erro ao Listar por nome!", "Erro!", {
          duration: 2000
        });
      });
    this.mostraProgresso = false;
  }

}




