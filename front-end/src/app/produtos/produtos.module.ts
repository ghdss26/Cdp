import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
