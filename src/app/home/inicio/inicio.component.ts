import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private router: Router,
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.definirDashboard();
  }

  definirDashboard() {

    this.service.totalArquivos()
      .subscribe(resposta => {
        this.totalDocumentos = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter Total de Arquivos!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
    //---------------------------------------
    this.service.totalArquivosSemInfo()
      .subscribe(resposta => {
        this.totaDocumentosSemInfo = resposta;
      }, responseError => {
        this.snackBar.open("Erro ao Obter Total de Arquivos Sem Info!", "ERRO!", {
          duration: 2000
        });
        console.log(responseError);
      });
    //---------------------------------------


  }

}
