import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44336/api/cliente';

  constructor( private _http: HttpClient ) { }

  getClientes(): Observable<Response> {
      return this._http.get<Response>(this.url);
  }
}

