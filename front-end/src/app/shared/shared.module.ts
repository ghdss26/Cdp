import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { EstoquePipe } from './pipes/estoque.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({

  declarations: [

    ErrorDialogComponent,
     EstoquePipe,
     ConfirmationDialogComponent

  ],
  imports: [

    AppMaterialModule,
    CommonModule
  ],
  exports: [

    ErrorDialogComponent,
    ConfirmationDialogComponent,
    EstoquePipe

  ]
})
export class SharedModule { }
