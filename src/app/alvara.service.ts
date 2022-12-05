import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alvara } from './alvara/alvara';
import { AlvaraPaginator } from './alvara/alvaraPaginator';

const API_URL = 'http://localhost:8080/api/alvara';

@Injectable({ providedIn: 'root' })
export class AlvaraService {

  constructor(private http: HttpClient) { }


  uploadPdf(formData: FormData): Observable<any> {

    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }


    return this.http.post(API_URL + '/pdf', formData, { responseType: 'blob' });
  }


  listarTodos(page, size): Observable<AlvaraPaginator> {


    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }


    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "?" + params.toString(),{headers});
  }

  listarPorNome(page, size, nome): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set("nome", nome)
    return this.http.get<any>(API_URL + "/nome?" + params.toString());
  }

}
