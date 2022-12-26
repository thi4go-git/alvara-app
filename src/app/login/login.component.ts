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
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home/inicio'])
      }, errorResponse => {
        const status = errorResponse.status;
        const msgErro = errorResponse.message;
        this.loginError = true;
        if (status == 0) {
          const infoErr = 'STATUS: (' + status + ") " + msgErro;
          this.erros = [infoErr];
        } else {
          this.erros = [errorResponse.error.error_description];
        }
      }
      )
  }

}
