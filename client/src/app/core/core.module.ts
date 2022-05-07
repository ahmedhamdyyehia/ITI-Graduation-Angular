import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    NavBarComponent,
    OwlCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports:[
    NavBarComponent,
    OwlCarouselComponent
  ]
})
export class CoreModule { }
