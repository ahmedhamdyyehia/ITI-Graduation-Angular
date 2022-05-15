import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/deliverymethod';
import { IOrderToCreate } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  createOrder(order: IOrderToCreate) {
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'order/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    )
  }

  Paymob1(){
    const headers = { 'Content-Type': 'application/json' };
    const body1 = {   "api_key": "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam94TlRjd016Z3NJbTVoYldVaU9pSXhOalV5TVRjNU1qUXhMams0TXprd05pSXNJbU5zWVhOeklqb2lUV1Z5WTJoaGJuUWlmUS52ODMwc1V1TUtzcVA3cGxUaHdaWDRPeGlfX082TU5LV3JxMTZsWkFvc1dhZVNoTm5GeklleUd4RWFpN1ZwOHUyRGVaeC14VjNxcGdTR0ZlQkZUQmhEQQ==" };
    return this.http.post('https://accept.paymobsolutions.com/api/auth/tokens', body1, { headers })
}


Paymob2(global:any){
  const headers = { 'Content-Type': 'application/json' };
  const body2 = { 
  "auth_token": global,
  "delivery_needed": "false",
  "amount_cents": "1000",
  "currency": "EGP"
 };
return  this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers })

}


}
