import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlvaraService } from 'src/app/alvara.service';

@Component({
  selector: 'app-preferencias-form',
  templateUrl: './preferencias-form.component.html',
  styleUrls: ['./preferencias-form.component.css']
})
export class PreferenciasFormComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  contSucessUp: number = 0;
  mostraProgresso: boolean = false;
  listaArquivos: File[];
  percentProgress: number = 0;
  descProgresso: string = "";

  selecionarArquivosPDF(event) {
    this.listaArquivos = event.target.files;
    const listaNomes = [];
    for (let cont = 0; cont < this.listaArquivos.length; cont++) {
      listaNomes.push(this.listaArquivos[cont].name);
    }
    document.getElementById('select').innerHTML = listaNomes.length + " Arquivos Selecionados...";
  }

  onUpload() {
    if (this.listaArquivos) {
      this.mostraProgresso = true;
      for (let index = 0; index < this.listaArquivos.length; index++) {
        const pdf = this.listaArquivos[index];
        const formData: FormData = new FormData();
        formData.append("pdf", pdf);
        this.upload(formData);
      }
    } else {
      this.snackBar.open("Selecione os Arquivos para UPLOAD!", "INFO!", {
        duration: 3000
      });
    }
  }

  upload(formData: FormData) {
    this.service.uploadPdf(formData)
      .subscribe(response => {
        //
        this.contSucessUp = this.contSucessUp + 1;
        this.percentProgress = (this.contSucessUp / this.listaArquivos.length) * 100;
        this.descProgresso = "Aguarde, processando ( " + this.contSucessUp + " de " + this.listaArquivos.length + " ) " +
          " - " + (this.percentProgress).toFixed(2) + "%";
        if (this.contSucessUp == this.listaArquivos.length) {
          this.mostraProgresso = false;
          document.getElementById('select').innerHTML = "Conclu??do!";
          this.listaArquivos = [];
          this.snackBar.open("Processo Conclu??do! (" + this.contSucessUp + ") Arquivos processados com Sucesso!", "Sucesso!", {
            duration: 4000
          });
          this.contSucessUp = 0;
          this.percentProgress = 0;
        }
        //
      }, responseError => {
        console.log("ERRO");
        console.log(responseError);
        this.snackBar.open("Erro ao Fazer upload!", "ERRO!", {
          duration: 3000
        });
      });
  }

  ngOnInit(): void {
  }


}
