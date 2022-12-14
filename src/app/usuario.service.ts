import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioPaginator } from './usuario/UsuarioPaginator';
import { Observable } from 'rxjs';
import { UsuarioDTO } from './usuario/UsuarioDTO';
import { Usuario } from './usuario/Usuario';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  apiURL: string = environment.apiUrl + "/api/usuarios";

  constructor(private http: HttpClient) { }

  listarTodos(page, size): Observable<UsuarioPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<UsuarioPaginator>(this.apiURL + "?" + params.toString());
  }

  salvarUsuario(usuarioDt: UsuarioDTO): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiURL + '/novo', usuarioDt);
  }

  uploadFoto(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiURL + '/foto/' + id, formData, { responseType: 'blob' });
  }

  ativarUsuario(id: number): Observable<any> {
    return this.http.patch(this.apiURL + "/ativar/" + id, null);
  }

  ativarUsuarioAdm(id: number): Observable<any> {
    return this.http.patch(this.apiURL + "/ativardesativaradm/" + id, null);
  }

  deletarporId(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL + "/delete/" + id);
  }

}
