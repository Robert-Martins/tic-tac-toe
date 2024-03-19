import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModesRoutingModule } from './modes-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SuperTicTacToeComponent } from './super-tic-tac-toe/super-tic-tac-toe.component';


@NgModule({
  declarations: [
    TicTacToeComponent,
    SuperTicTacToeComponent
  ],
  imports: [
    CommonModule,
    ModesRoutingModule
  ]
})
export class ModesModule { }
