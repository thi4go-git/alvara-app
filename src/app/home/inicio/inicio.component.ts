import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/alvara.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  totalDocumentos = 0;
  totalVencidos = 0;
  venceEm60dias = 0;
  venceApos60dias = 0;
  totaDocumentosSemInfo = 0;

  tipoConsulta: string;




  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.definirDashboard();
  }

  definirDashboard() {
    this.definirTotalArquivos();
    this.qtdeVencerApos60Dias();
    this.definirVencerEm60Dias();
    this.definirSemInformacoes();
    this.definirVencidos();
  }

  definirTotalArquivos() {
    this.service.totalArquivos()
      .subscribe(resposta => {
        this.totalDocumentos = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter totalDocumentos!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });

  }

  definirVencidos() {
    this.service.totalArquivosVencidos()
      .subscribe(resposta => {
        this.totalVencidos = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter totalVencidos!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
  }

  definirVencerEm60Dias() {
    this.service.totalArquivosVencerEm60Dias()
      .subscribe(resposta => {
        this.venceEm60dias = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter venceEm60dias!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
  }

  qtdeVencerApos60Dias() {
    this.service.totalArquivosVencerApos60Dias()
      .subscribe(resposta => {
        this.venceApos60dias = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter venceApos60dias!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
  }

  definirSemInformacoes() {
    this.service.totalArquivosSemInformacoes()
      .subscribe(resposta => {
        this.totaDocumentosSemInfo = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter totaDocumentosSemInfo!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
  }


}
