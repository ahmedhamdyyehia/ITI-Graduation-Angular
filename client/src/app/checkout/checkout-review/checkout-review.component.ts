import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBasket } from 'src/app/shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { CheckoutService } from '../checkout.service';



 let baseUrl1 = environment.payUrl;





@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

 global:any

  constructor( private chechoutService:CheckoutService) { }

  ngOnInit(): void {


  }

  Paymob1(){
 this.chechoutService.Paymob1().subscribe(data=>{
   this.chechoutService.Paymob2(data['token']).subscribe(data1=>{
     console.log(data1)
   })
 })
}
//   Paymob(){
//     const headers = { 'Content-Type': 'application/json' };
//     const body1 = {   "api_key": "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam94TlRjd016Z3NJbTVoYldVaU9pSXhOalV5TVRjNU1qUXhMams0TXprd05pSXNJbU5zWVhOeklqb2lUV1Z5WTJoaGJuUWlmUS52ODMwc1V1TUtzcVA3cGxUaHdaWDRPeGlfX082TU5LV3JxMTZsWkFvc1dhZVNoTm5GeklleUd4RWFpN1ZwOHUyRGVaeC14VjNxcGdTR0ZlQkZUQmhEQQ==" };
//     return this.http.post('https://accept.paymobsolutions.com/api/auth/tokens', body1, { headers }).subscribe(data => {
//         this.global=data["token"] ;
//       // console.log(this.global);

// const body2 = { 
//   "auth_token": this.global,
//   "delivery_needed": "false",
//   "amount_cents": "1000",
//   "currency": "EGP"
//  };
// this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
//     const id =data["id"] ;
//     console.log(id);



//     });
//   });



   
// // call second body
// // start call

// // const body2 = { 
// //   "auth_token": this.global,
// //   "delivery_needed": "false",
// //   "amount_cents": "1000",
// //   "currency": "EGP"
// //  };
// // this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
// //     const id =data["id"] ;
// //     console.log(id);

// //   });
// // end call

// // const body2 = { 
// //   "auth_token": this.global,
// //   "delivery_needed": "false",
// //   "amount_cents": "1000",
// //   "currency": "EGP"
// //  };
// // this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
// //     const id =data["id"] ;
// //     console.log(id);

// //   });





    
//   }
}


