import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlvaraService } from 'src/app/alvara.service';

import { Router } from '@angular/router';



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

  ngOnInit(): void {
  }


  uploadPdf(event) {
    const files = event.target.files;
    if (files) {

      let listaArquivos: File[] = [];
      listaArquivos = files;
      for (let index = 0; index < listaArquivos.length; index++) {
        const pdf = listaArquivos[index];
        const formData: FormData = new FormData();
        formData.append("pdf", pdf);
        console.log("Processando arquivo: " + pdf.name + " - " + pdf.type + " - Size: " + pdf.size);
        this.upload(formData);
        console.log("--");
      }

    }
  }

  upload(formData: FormData) {
    this.service.uploadPdf(formData)
      .subscribe(response => {
        console.log("Sucesso UPLOAD " + response);
        this.snackBar.open("Sucesso UPLOAD!", "Sucesso!", {
          duration: 2000
        });
        this.router.navigate(['/alvara-lista']);
      }, responseError => {
        console.log("ERRO UPLOAD " + responseError);
      });
  }

}
