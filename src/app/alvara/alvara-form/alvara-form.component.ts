import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AlvaraService } from 'src/app/alvara.service';
import { Alvara } from '../alvara';


@Component({
  selector: 'app-alvara-form',
  templateUrl: './alvara-form.component.html',
  styleUrls: ['./alvara-form.component.css']
})
export class AlvaraFormComponent implements OnInit {

  id: number;
  alvara: Alvara;
  tipoDoc: any[];
  errors: string[];

  constructor(
    private router: Router,
    private service: AlvaraService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.alvara = new Alvara();
  }

  ngOnInit(): void {
    this.listarPorId();
    this.definirComboBox();
  }

  listarPorId() {
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro.id) {
        this.id = parametro.id;
        this.service.obterArquivoPorId(this.id).subscribe(response => {
          this.alvara = response;
        }, responseError => {
          console.log(responseError);
          this.snackBar.open("Erro ao Obter Arquivo po ID!", "ERRO!", {
            duration: 2000
          });
        });
      }
    });
  }


  definirComboBox() {
    this.service
      .obterListaTipoDoc()
      .subscribe(resposta => {
        this.tipoDoc = resposta;
      }, errorResponse => {
        console.log(errorResponse);
      })
  }

  onSubmit() {

    this.service
      .atualizarArquivoPorId(this.alvara)
      .subscribe(resposta => {
        console.log(resposta);
        this.snackBar.open("Sucesso ao Atualizar!", "Sucesso!", {
          duration: 2000
        });
        this.router.navigate(['/alvara/lista'])
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.snackBar.open("Erro ao Atualizar Arquivo po ID!", "ERRO!", {
          duration: 2000
        });
        console.log(errorResponse);
      })

  }

}
