import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from './../model/produto';
import { delay, first, tap } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor(private HttpClient: HttpClient) { }

  list() {

    return this.HttpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      delay(15000),
      tap(produtos => console.log(produtos))
    );
  }
}
