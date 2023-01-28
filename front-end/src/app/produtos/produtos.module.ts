import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoFormComponent,
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
