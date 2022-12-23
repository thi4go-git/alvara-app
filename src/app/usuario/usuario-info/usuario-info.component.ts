import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsuarioInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario
  ) { }

  ngOnInit(): void {
  }

  fecharDialog() {
    this.dialogRef.close();
  }

}
