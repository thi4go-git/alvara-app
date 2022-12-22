import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  permissoes: string[];
  nova : string[];
  constructor() {
    this.permissoes = ['USER', 'ADMIN'];
  }



  ngOnInit(): void {
  }



}
