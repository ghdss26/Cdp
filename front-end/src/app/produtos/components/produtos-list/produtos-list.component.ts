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
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(true);

  readonly displayedColumns = [ 'titulo', 'preco', 'estoque', 'actions'];

  constructor() {

  }

  onAdd() {

    this.add.emit(true);
  }

  onEdit(produto: Produto) {

    this.edit.emit(produto);
  }

  onDelete(produto: Produto) {

    this.remove.emit(produto);
  }


}
