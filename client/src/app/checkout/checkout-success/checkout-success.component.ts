import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import axios from 'axios';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
  order: IOrder;
  
  constructor(private router: Router) {
     const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if (state) {
      this.order = state as IOrder; }
    }

  ngOnInit(): void {
  }



  global:"any"
  header2 = { 'Content-Type': 'application/json' };


  Paymob(){





   console.log("ddddddd")
   const headers = {
       'Content-Type': 'application/json',
      
     }
     const data ={"api_key": "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam94TlRjd016Z3NJbTVoYldVaU9pSXhOalV5TVRjNU1qUXhMams0TXprd05pSXNJbU5zWVhOeklqb2lUV1Z5WTJoaGJuUWlmUS52ODMwc1V1TUtzcVA3cGxUaHdaWDRPeGlfX082TU5LV3JxMTZsWkFvc1dhZVNoTm5GeklleUd4RWFpN1ZwOHUyRGVaeC14VjNxcGdTR0ZlQkZUQmhEQQ=="}
     axios.post('https://accept.paymobsolutions.com/api/auth/tokens', data, {
         headers: headers
       })
       .then(function myFunction (response){
       console.log("res1", response.data.token)
    var data1={
       "auth_token": response.data.token,
       "delivery_needed": "false",
       "amount_cents": "1010",
       "currency": "EGP"};
        console.log("data1",data1)
   
    axios.post('https://accept.paymobsolutions.com/api/ecommerce/orders',data1, {
         headers:{
           'Content-Type': 'application/json'}
       })
       .then(function myFunction (response){
       console.log("res1", response.data.token)
    var data2={
     "auth_token": data1.auth_token,
     "amount_cents": "10000", 
     "expiration": 3600, 
     "order_id": response.data.id,
     "billing_data": {
       "apartment": "803", 
       "email": "Ahmed@gmail.com", 
       "floor": "42", 
       "first_name": "Ahmed", 
       "street": "ahmed Maher", 
       "building": "8028", 
       "phone_number": "+86(8)9135210487", 
       "shipping_method": "PKG", 
       "postal_code": "01898", 
       "city": "Jaskolskiburgh", 
       "country": "CR", 
       "last_name": "Nicolas", 
       "state": "Utah"
     }, 
     "currency": "EGP", 
     "integration_id": "1808595",
     "lock_order_when_paid": "false" 
   };
        console.log("data1",data1)
   
    axios.post('https://accept.paymobsolutions.com/api/acceptance/payment_keys',data2, {
         headers:{
           'Content-Type': 'application/json'}
       })
       .then(function myFunction(response) {console.log("3",response.data)
                                           
         location.replace(`https://accept.paymobsolutions.com/api/acceptance/iframes/349151?payment_token=${response.data.token}`) 
       console.log("final",`https://accept.paymobsolutions.com/api/acceptance/iframes/349151?payment_token=${response.data.token}`);
         })
       .catch((error) => {
         console.log("error",error)})})
       .catch((error) => {
         console.log("error",error)})}) .catch((error) => 
         console.log("error1",error))
   
       }

}
