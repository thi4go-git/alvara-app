import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlvaraService } from 'src/app/alvara.service';


@Component({
  selector: 'app-preferencias-form',
  templateUrl: './preferencias-form.component.html',
  styleUrls: ['./preferencias-form.component.css']
})
export class PreferenciasFormComponent implements OnInit {

  constructor(
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
        console.log("Processando arquivo: " + pdf.name + " - " + pdf.type);
        this.service.uploadPdf(formData)
          .subscribe(response => {
            console.log("Sucesso UPLOAD " + response);
          }, responseError => {
            console.log("ERRO UPLOAD " + responseError);
          });
        console.log("");
      }

    }
  }



}
