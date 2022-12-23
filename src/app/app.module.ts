import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { AlvaraModule } from './alvara/alvara.module';
import { AlvaraService } from './alvara.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { PreferenciasModule } from './preferencias/preferencias.module';
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { DialogModule } from './dialog/dialog.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    AlvaraModule,
    PreferenciasModule,
    HomeModule,
    UsuarioModule,
    DialogModule
  ],
  providers: [
    AlvaraService,
    AuthService,
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
