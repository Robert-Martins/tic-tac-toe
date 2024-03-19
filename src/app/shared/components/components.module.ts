import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsModule } from './cards/cards.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    CardsModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
