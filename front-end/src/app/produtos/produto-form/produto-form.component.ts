import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProdutosService } from './../services/produtos.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit{

  form = this.NonNullableFormBuilder.group({

    titulo:[''],
    preco: [],
    estoque:[]
  });

  constructor(private NonNullableFormBuilder: NonNullableFormBuilder,
    private service: ProdutosService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit(): void {

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
