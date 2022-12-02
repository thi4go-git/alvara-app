import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-preferencias-form',
  templateUrl: './preferencias-form.component.html',
  styleUrls: ['./preferencias-form.component.css']
})
export class PreferenciasFormComponent implements OnInit {

  constructor(
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
        const arquivo = listaArquivos[index];
        console.log(arquivo);
      }
      this.snackBar.open("Upload feito com sucesso!", "Sucesso!", {
        duration: 3000
      });

    }
  }

}
