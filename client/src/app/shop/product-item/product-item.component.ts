import { BasketService } from './../../basket/basket.service';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from './../../shared/models/IProduct';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:IProduct;
  basket$: Observable<IBasket>;
  basketItems:IBasketItem[];
  constructor(private basketService:BasketService) {
    this.basketItems =[];
   }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basket$.subscribe(data=>{
      if(data){
        this.basketItems = data.items;
      }
    });
  }

  checkCart()
  {
    if(this.basketItems.length>0){
      for (let i = 0; i < this.basketItems?.length; i++) {
        if(this.basketItems[i]?.id == this.product.id){
          return true;
        }
      }
    }
    return false;
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

}
