import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from './../model/produto';
import { delay, first, tap } from 'rxjs';

import axios from 'axios';

@Injectable({

  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'api/produtos';

  constructor(private HttpClient: HttpClient) { }

  list() {

    return this.HttpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(produtos => console.log(produtos))
    );
  }

  loadById(id: string) {

    return this.HttpClient.get<Produto>(`${this.API}/${id}`);
  }

  save(record: Partial<Produto>) {

    console.log(record);

    if(record._id) {

      console.log('update');
      return this.update(record);
    }

    console.log('create');
   return this.create(record);
  }

  private create(record: Partial<Produto>) {

    return this.HttpClient.post<Produto>(this.API, record).pipe(first());
  }

  private update(record: Partial<Produto>) {

    return this.HttpClient.put<Produto>(`${this.API}/${record._id}`, record).pipe(first());
  }

  async remove(id: string) {

    return axios.delete(`${this.API}/${id}`)
    //delete(`${this.API}/${id}`).pipe(first());
  }

}
