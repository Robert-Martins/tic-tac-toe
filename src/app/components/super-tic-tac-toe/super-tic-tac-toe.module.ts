import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTicTacToeComponent } from './super-tic-tac-toe/super-tic-tac-toe.component';
import { SuperTicTacToeToggleComponent } from './super-tic-tac-toe-toggle/super-tic-tac-toe-toggle.component';



@NgModule({
  declarations: [
    SuperTicTacToeComponent,
    SuperTicTacToeToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuperTicTacToeComponent
  ]
})
export class SuperTicTacToeModule { }
