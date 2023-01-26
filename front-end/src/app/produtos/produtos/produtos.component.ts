import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent{

  produtos$: Observable <Produto[]>;

  displayedColumns = ['titulo', 'preco', 'estoque'];

  //produtosService: ProdutosService;

  constructor(

    private produtosService: ProdutosService,
    public dialog: MatDialog
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
}
