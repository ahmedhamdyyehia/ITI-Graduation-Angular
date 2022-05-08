import { Component, OnInit } from '@angular/core';
import { ShopService } from './../../shop/shop.service';
import { IProductType } from './../../shared/models/IProductType';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  categories:IProductType[];
  constructor(private shopShervice:ShopService) {
    this.categories =[];
   }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories()
  {
    this.shopShervice.getTypes().subscribe(data=>{
      this.categories = data;
    });
  }

}
