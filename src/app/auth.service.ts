import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_URL = 'http://localhost:8080/....';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

}
