import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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
    id: [''],
    titulo:['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
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
      id: produto.id,
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

  getErrorMessage(fieldName: string) {

    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {

      return 'Campo Obrigatório';
    }

    if (field?.hasError('minlength')) {

      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {

      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100
      return `Tamanho máximo precisa ser de ${requiredLength} caracteres`;
    }


    return 'Campo Inválido';

  }
}
