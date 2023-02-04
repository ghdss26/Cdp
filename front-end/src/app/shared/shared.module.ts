import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './pipes/status.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({

  declarations: [

    ErrorDialogComponent,
    StatusPipe,
    ConfirmationDialogComponent

  ],
  imports: [

    AppMaterialModule,
    CommonModule
  ],
  exports: [

    ErrorDialogComponent,
    ConfirmationDialogComponent,
    StatusPipe

  ]
})
export class SharedModule { }
