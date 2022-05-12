import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IProduct } from 'src/app/shared/models/IProduct';
import { IUser } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild('search') searchTerm?:ElementRef;
  
  basket$: Observable<IBasket>;
  currentUser$:Observable<IUser>;
  products:IProduct[];

  constructor(private basketService: BasketService, 
    private accountService:AccountService,
    private route:Router) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$=this.accountService.currentUser$;
  }
  logout(){
    this.accountService.logout();
  }

  onSearch()
  {
    this.route.navigate(['/shop'], { queryParams: { search: this.searchTerm?.nativeElement.value } });
  }

}