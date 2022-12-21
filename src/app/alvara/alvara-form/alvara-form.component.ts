import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AlvaraService } from 'src/app/alvara.service';
import { Alvara } from '../Alvara';



@Component({
  selector: 'app-alvara-form',
  templateUrl: './alvara-form.component.html',
  styleUrls: ['./alvara-form.component.css']
})
export class AlvaraFormComponent implements OnInit {

  id: number;
  alvara: Alvara;
  tipo_doc: any[];
  listaErros: string[];
  //
  dataTeste: Date;

  constructor(
    private router: Router,
    private service: AlvaraService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar

  ) {
    this.alvara = new Alvara();
  }

  ngOnInit(): void {
    this.definirComboBox();
    this.listarPorId();
  }

  listarPorId() {
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro.id) {
        this.id = parametro.id;
        this.service
          .obterArquivoPorId(this.id)
          .subscribe(resposta => {
            this.alvara = resposta;
          }, errorResponse => {
            console.log(errorResponse);
          })
      }
    });
  }


  definirComboBox() {
    this.service
      .obterListaTipoDoc()
      .subscribe(resposta => {
        this.tipo_doc = resposta;
      }, errorResponse => {
        console.log(errorResponse);
      })
  }

  onSubmit() {
    console.log(this.alvara);
    this.atualizar();
  }

  atualizar() {
    this.service
      .atualizarArquivoPorId(this.alvara)
      .subscribe(resposta => {
        this.snackBar.open("SUCESSO Ao Atualizar Informações!", "SUCESSO!", {
          duration: 2000
        });
        this.router.navigate(['/alvara/lista'])
      }, errorResponse => {
        this.snackBar.open("ERRO Ao Atualizar Informações!", "ERRO!", {
          duration: 2000
        });
        this.listaErros = errorResponse.error.erros
      })
  }

}
