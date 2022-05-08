import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShopService } from './../../shop/shop.service';
import { IProduct } from './../../shared/models/IProduct';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html'
})
export class OwlCarouselComponent implements OnInit {

  slidesStore = [];
  constructor(private shopService:ShopService) {}

  autoPlayExampleOptions: OwlOptions = {
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  }

  getLatestProducts()
  {
    this.shopService.getLatestProduct().subscribe(data=>{
      this.slidesStore  = data.map(x=>{
        return {id:x.id.toString(),src:x.pictureUrl,alt:x.name,title:x.name}
      });
    });
  }

  ngOnInit(): void {
    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      this.autoPlayExampleOptions.rtl = true;
    }
    this.getLatestProducts();
  }

}
