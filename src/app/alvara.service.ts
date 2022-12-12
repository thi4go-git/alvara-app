import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlvaraPaginator } from './alvara/alvaraPaginator';
import { environment } from '../environments/environment'
import { Alvara } from './alvara/alvara';



@Injectable({ providedIn: 'root' })
export class AlvaraService {

  apiURL: string = environment.apiUrl + "/api/alvara";


  constructor(private http: HttpClient) { }


  uploadPdf(formData: FormData): Observable<any> {
    return this.http.post(this.apiURL + '/pdf', formData, { responseType: 'blob' });
  }


  listarTodos(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiURL + "?" + params.toString());
  }

  listarPorNome(page, size, nome): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set("nome", nome)
    return this.http.get<any>(this.apiURL + "/nome?" + params.toString());
  }

  totalArquivos(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalarquivos");
  }

  totalArquivosVencidos(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencidos");
  }

  totalArquivosVencerEm60Dias(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencerem60dias");
  }

  totalArquivosVencerApos60Dias(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencerapos60dias");
  }

  totalArquivosSemInformacoes(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalseminformacoes");
  }

  obterArquivoPorId(id: number): Observable<Alvara> {
    return this.http.get<Alvara>(this.apiURL + "/" + id);
  }


  atualizarArquivoPorId(alvara: Alvara): Observable<any> {
    return this.http.put<any>(this.apiURL + "/atualizar", alvara);
  }


}
