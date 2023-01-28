import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Produto } from './../model/produto';
import { ProdutosService } from './../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent{

  produtos$: Observable <Produto[]>;

  displayedColumns = [ 'titulo', 'preco', 'estoque', 'actions'];

  //produtosService: ProdutosService;

  constructor(

    private produtosService: ProdutosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //this.produtos = [];

    //this.produtosService = new ProdutosService();

    this.produtos$ = this.produtosService.list()
    .pipe(

      catchError(

        error => {

          this.onError('Erro ao carregar produtos.');
          return of([])
        }
      )
    );
  }

  onError(errorMsg: String) {

    this.dialog.open(ErrorDialogComponent, {

      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {

    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
