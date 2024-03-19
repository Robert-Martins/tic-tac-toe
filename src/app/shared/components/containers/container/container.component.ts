import { Component } from '@angular/core';

@Component({
  selector: 'tic-tac-toeing-container',
  template: `
    <div class="tic-tac-toeing-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}
