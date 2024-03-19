import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TicTacToeToggleComponent } from './tic-tac-toe-toggle/tic-tac-toe-toggle.component';



@NgModule({
  declarations: [
    TicTacToeComponent,
    TicTacToeToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TicTacToeComponent
  ]
})
export class TicTacToeModule { }
