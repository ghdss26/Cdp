import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Produto } from '../../model/produto';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent{

  @Input() produtos: Produto[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = [ 'titulo', 'preco', 'estoque', 'actions'];

  constructor() {

  }

  onAdd() {

    this.add.emit(true);
  }


}
