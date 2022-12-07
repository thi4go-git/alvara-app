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


  uploadPdf(event) {
    const files = event.target.files;
    if (files) {
      let listaArquivos: File[] = [];
      listaArquivos = files;
      for (let index = 0; index < listaArquivos.length; index++) {
        const pdf = listaArquivos[index];
        const formData: FormData = new FormData();
        formData.append("pdf", pdf);
        this.upload(formData);
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
        this.router.navigate(['/alvara/lista']);
      }, responseError => {
        this.snackBar.open("Erro UPLOAD!" + responseError, "Erro!", {
          duration: 2000
        });
      });
  }

  ngOnInit(): void {
  }


}
