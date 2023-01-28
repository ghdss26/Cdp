import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { EstoquePipe } from './pipes/estoque.pipe';

@NgModule({

  declarations: [

    ErrorDialogComponent,
     EstoquePipe
  ],
  imports: [

    AppMaterialModule,
    CommonModule
  ],
  exports: [

    ErrorDialogComponent,
    EstoquePipe
  ]
})
export class SharedModule { }
