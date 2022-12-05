import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string;
  password: string;
  loginError: boolean;

  erros: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {

    this.authService
      .obterToken(this.username, this.password)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/alvara/lista'])
      }, errorResponse => {
        this.erros = ['Usuário ou Senha incorretos'];
      }
      )
  }


}
