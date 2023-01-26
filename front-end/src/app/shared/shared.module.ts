import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [

    ErrorDialogComponent
  ],
  imports: [

    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
