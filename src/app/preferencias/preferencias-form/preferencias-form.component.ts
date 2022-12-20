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
  percentProgress: number = 50;
  descProgresso: string = "";

  uploadPdf(event) {
    this.mostraProgresso = true;
    this.listaArquivos = event.target.files;
    if (this.listaArquivos) {
      for (let index = 0; index < this.listaArquivos.length; index++) {
        const pdf = this.listaArquivos[index];
        const formData: FormData = new FormData();
        formData.append("pdf", pdf);
        this.upload(formData);
      }
    }
  }

  upload(formData: FormData) {
    this.service.uploadPdf(formData)
      .subscribe(response => {
        this.contSucessUp = this.contSucessUp + 1;
        this.percentProgress = (this.contSucessUp / this.listaArquivos.length) * 100;
        this.descProgresso = "Aguarde, processando ( " + this.contSucessUp + " de " + this.listaArquivos.length + " ) " +
          " - " + (this.percentProgress).toFixed(2) + "%";
        if (this.contSucessUp == this.listaArquivos.length) {
          this.mostraProgresso = false;
          this.snackBar.open("Processo Concluído!", "Sucesso!", {
            duration: 3000
          });
          this.router.navigate(['/preferencias/form']);
          this.contSucessUp = 0;
          this.percentProgress = 0;
        }
      }, responseError => {
        this.snackBar.open("Erro ao Fazer upload!", "ERRO!", {
          duration: 3000
        });
      });
  }

  ngOnInit(): void {
  }


}
