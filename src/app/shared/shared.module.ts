import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    CustomSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CustomSpinnerComponent,
    MaterialModule
  ]
})
export class SharedModule { }
