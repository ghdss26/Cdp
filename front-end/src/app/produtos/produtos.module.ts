import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { ProdutoFormComponent } from './containers/produtos/produto-form/produto-form.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

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
