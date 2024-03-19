import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  declarations: [ContainerComponent, FlexComponent],
  imports: [CommonModule],
  exports: [ContainerComponent, FlexComponent],
})
export class ContainersModule {}
