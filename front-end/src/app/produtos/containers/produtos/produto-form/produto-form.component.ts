import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/produtos/model/produto';

import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit{

  form = this.NonNullableFormBuilder.group({
    _id: [''],
    titulo:[''],
    preco: 0,
    estoque: 0
  });

  constructor(private NonNullableFormBuilder: NonNullableFormBuilder,
    private service: ProdutosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    const produto: Produto = this.route.snapshot.data['produto'];

    this.form.setValue({
      _id: produto._id,
      titulo: produto.titulo,
      preco: +produto.preco,
      estoque: +produto.estoque,
    });
  }

  onSubmit() {

    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => {

      this.onError();
    });

  }

  onCancel() {

    this.location.back();
  }

  private onSuccess() {

    this.snackBar.open('Produto salvo com sucesso !', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {

    this.snackBar.open('Erro ao salvar produto', '', {duration: 5000});
  }
}
