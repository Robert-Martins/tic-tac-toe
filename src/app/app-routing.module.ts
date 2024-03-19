import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { TicTacToeComponent } from './view/modes/tic-tac-toe/tic-tac-toe.component';
import { SuperTicTacToeComponent } from './view/modes/super-tic-tac-toe/super-tic-tac-toe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    children: [
      {
        path: 'tic-tac-toe',
        component: TicTacToeComponent
      },
      {
        path: 'super-tic-tac-toe',
        component: SuperTicTacToeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
