import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlvaraPaginator } from './alvara/alvaraPaginator';
import { environment } from '../environments/environment'
import { Alvara } from './alvara/Alvara';




@Injectable({ providedIn: 'root' })
export class AlvaraService {

  apiURL: string = environment.apiUrl + "/api/alvara";


  constructor(private http: HttpClient) { }


  uploadPdf(formData: FormData): Observable<any> {
    return this.http.post(this.apiURL + '/pdf', formData, { responseType: 'blob' });
  }

  baixarArquivo(id: number): Observable<any> {
    return this.http.get<any>(this.apiURL + "/download/" + id);
  }

  listarTodos(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<AlvaraPaginator>(this.apiURL + "?" + params.toString());
  }



  listarTodosPorNome(page, size, nome): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('nome', nome)
    return this.http.get<AlvaraPaginator>(this.apiURL + "/listarpornome?" + params.toString());
  }


  listarVencidos(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiURL + "/vencidos?" + params.toString());
  }

  listarVencerEmAte60Dias(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiURL + "/vencerate60dias?" + params.toString());
  }

  listarDocumentosSemInfo(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiURL + "/seminfo?" + params.toString());
  }

  listarVencerApos60Dias(page, size): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiURL + "/vencerapos60dias?" + params.toString());
  }

  obterArquivoPorId(id: number): Observable<Alvara> {
    return this.http.get<Alvara>(this.apiURL + "/" + id);
  }


  atualizarArquivoPorId(alvara: Alvara): Observable<any> {
    return this.http.put<any>(this.apiURL + "/atualizar", alvara);
  }

  obterListaTipoDoc(): Observable<any> {
    return this.http.get<Alvara>(this.apiURL + "/tipodocumento");
  }

  //-------------------------------------

  totalArquivos(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalarquivos");
  }

  totalArquivosVencidos(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencidos");
  }

  totalArquivosVencerEm60Dias(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencerem60dias");
  }

  totalArquivosSemInformacoes(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalseminformacoes");
  }

  totalArquivosVencerApos60Dias(): Observable<number> {
    return this.http.get<number>(this.apiURL + "/totalvencerapos60dias");
  }


}
