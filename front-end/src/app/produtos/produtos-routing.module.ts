import { ProdutoResolver } from '././guards/produto.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './containers/produtos/produto-form/produto-form.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';

const routes: Routes = [

  {path: '', component: ProdutosComponent },
  {path: 'new', component: ProdutoFormComponent, resolve: {produto: ProdutoResolver} },
  {path: 'edit/:id', component: ProdutoFormComponent, resolve: {produto: ProdutoResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
