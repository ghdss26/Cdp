import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

  {path: '', component: ProdutosComponent },
  {path: 'new', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
