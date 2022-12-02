import { Component, OnInit } from '@angular/core';
import { Alvara } from '../alvara';

@Component({
  selector: 'app-alvara-lista',
  templateUrl: './alvara-lista.component.html',
  styleUrls: ['./alvara-lista.component.css']
})
export class AlvaraListaComponent implements OnInit {

  alvaraObj: Alvara;
  lista: Alvara[] = [];
  colunas = ['numero', 'empresa', 'cnpj', 'validade'];

  constructor() { }

  ngOnInit(): void {

    //
    let alvara1 = new Alvara;
    alvara1.numero = 2122022;
    alvara1.cnpj = "91222390000108";
    alvara1.empresa = "Copel vale s/a";
    alvara1.validade = '22/11/2022';
    //
    let alvarasLista: Alvara[] = [alvara1, alvara1, alvara1, alvara1];
    this.lista = alvarasLista;
    //
    console.log(this.lista);

  }

}
