import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Promise<boolean> | Observable<boolean> {
    console.log("canLoad");
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("canActivate");
    return this.verificarAutenticacaoUser();
  }

  private verificarAutenticacaoUser() {
    const autenticado = this.authService.isAuthenticated();
    if (autenticado) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



}
