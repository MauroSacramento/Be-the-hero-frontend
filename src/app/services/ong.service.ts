import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ONG } from '../model/ong';
import { UrlCodec } from '@angular/common/upgrade';
import { FormControl } from '@angular/forms';
import { Case } from '../model/ong';

@Injectable({
  providedIn: 'root'
})
export class OngService {
  private endPOint = "http://localhost:3333/";

  constructor(private httpClient: HttpClient) { }

  create_ong(dados: ONG){
    return this.httpClient.post<string>(`${this.endPOint}ongs`, dados);
  }

  login(id_ong: {id: string|null}) {
    return this.httpClient.post<string>(`${this.endPOint}session`, id_ong);
  }

  listarCasos(data_id: any){
    return this.httpClient.get<Case[]>(`${this.endPOint}profile`,
      {headers: {
        Authorization: data_id
      }
    })
  }

}
