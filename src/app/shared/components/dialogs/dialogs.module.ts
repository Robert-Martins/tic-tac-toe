import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    NgComponentOutlet,
    DirectivesModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogsModule { }
