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
      this.snackBar.open("Processo Concluído!", "Sucesso!", {
        duration: 3000
      });
      this.router.navigate(['/preferencias/form']);
    }
  }

  upload(formData: FormData) {
    this.service.uploadPdf(formData)
      .subscribe(response => {
        console.log("Sucesso UPLOAD " + response);
      }, responseError => {
        console.log("Erro UPLOAD " + responseError);
      });
  }

  ngOnInit(): void {
  }


}
