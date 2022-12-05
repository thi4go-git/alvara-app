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


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log(this.username + " - " + this.password);
    this.router.navigate(['/alvara/lista']);
  }


}
