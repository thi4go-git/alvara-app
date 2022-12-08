import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlvaraPaginator } from './alvara/alvaraPaginator';

const API_URL = 'http://192.168.1.253:8089/api/alvara';

@Injectable({ providedIn: 'root' })
export class AlvaraService {

  constructor(private http: HttpClient) { }


  uploadPdf(formData: FormData): Observable<any> {
    return this.http.post(API_URL + '/pdf', formData, { responseType: 'blob' });
  }


  listarTodos(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "?" + params.toString());
  }

  listarPorNome(page, size, nome): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set("nome", nome)
    return this.http.get<any>(API_URL + "/nome?" + params.toString());
  }

}
