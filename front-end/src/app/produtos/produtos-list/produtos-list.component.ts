import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from './../model/produto';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent{

  @Input() produtos: Produto[] = [];

  readonly displayedColumns = [ 'titulo', 'preco', 'estoque', 'actions'];

  constructor() {

  }

  onAdd() {


  }


}
