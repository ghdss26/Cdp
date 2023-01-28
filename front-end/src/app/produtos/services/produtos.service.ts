import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from './../model/produto';
import { delay, first, tap } from 'rxjs';

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
      delay(5000),
      tap(produtos => console.log(produtos))
    );
  }

  save(record: Partial<Produto>) {

    return this.HttpClient.post<Produto>(this.API, record).pipe(first());
  }
}
