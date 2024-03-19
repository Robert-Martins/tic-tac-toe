import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamecasePipe } from './namecase.pipe';



@NgModule({
  declarations: [
    NamecasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NamecasePipe
  ]
})
export class PipesModule { }
