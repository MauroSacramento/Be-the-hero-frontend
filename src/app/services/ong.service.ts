import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ONG } from '../model/ong';
import { UrlCodec } from '@angular/common/upgrade';

@Injectable({
  providedIn: 'root'
})
export class OngService {
  private endPOint = "http://localhost:3333/";

  constructor(private httpClient: HttpClient) { }

  create_ong(dados: ONG){
    return this.httpClient.post<string>(`${this.endPOint}ongs`, dados);
  }

  login(id_ong: string) {
    return this.httpClient.post<string>(`${this.endPOint}session`, id_ong);
  }

}
