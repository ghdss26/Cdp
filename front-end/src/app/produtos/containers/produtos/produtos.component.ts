import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Produto } from '../../model/produto';
import { ProdutosService } from '../../services/produtos.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent{

  produtos$: Observable <Produto[]> | null = null;

  displayedColumns = [ 'titulo', 'preco', 'estoque', 'status', 'actions'];

  //produtosService: ProdutosService;

  constructor(

    private produtosService: ProdutosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {

    //this.produtos = [];

    //this.produtosService = new ProdutosService();

    this.refresh();
  }

  refresh() {

    this.produtos$ = this.produtosService.list().pipe(

      catchError( error => {

        this.onError('Erro ao carregar produtos.');
        return of([]);
      })
    )
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

  onEdit(produto: Produto) {

    console.log(produto.id);
    this.router.navigate(['edit', produto.id], {relativeTo: this.route});
  }

  async onRemove(produto: Produto) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse produto ?',
    });

    dialogRef.afterClosed().subscribe(async (result:boolean) => {

      if (result) {

        await this.produtosService.remove(produto.id).then(() => {

          console.log(produto);
          this.refresh();
          this.snackBar.open('Curso removido com sucesso!', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }).catch(() => {

          this.onError('Erro ao tentar remover curso.')
        })
      }
    });

   /* (await this.produtosService.remove(produto._id)).subscribe(
      () => {
        console.log(produto);
        this.refresh();
        this.snackBar.open('Curso removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
    ); */
  }
}



