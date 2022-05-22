import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBasket } from 'src/app/shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { CheckoutService } from '../checkout.service';
import axios from 'axios';




 // let baseUrl1 = environment.payUrl;





@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

 

  constructor( private http : HttpClient) { }

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
      "amount_cents": "1010", 
      "expiration": 3600, 
      "order_id": response.data.id,
      "billing_data": {
        "apartment": "803", 
        "email": "claudette09@exa.com", 
        "floor": "42", 
        "first_name": "Clifford", 
        "street": "Ethan Land", 
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
    











    // var headers = { 'Content-Type': 'application/json' };
    // var body1 = {   "api_key": "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam94TlRjd016Z3NJbTVoYldVaU9pSXhOalV5TVRjNU1qUXhMams0TXprd05pSXNJbU5zWVhOeklqb2lUV1Z5WTJoaGJuUWlmUS52ODMwc1V1TUtzcVA3cGxUaHdaWDRPeGlfX082TU5LV3JxMTZsWkFvc1dhZVNoTm5GeklleUd4RWFpN1ZwOHUyRGVaeC14VjNxcGdTR0ZlQkZUQmhEQQ==" };

    // console.log(body1)


    //    this.http.post('https://accept.paymobsolutions.com/api/auth/tokens', body1, { headers }).subscribe(async data => {
    //    this.global=data["token"]
    //    var t=this.global.toString();
    //   console.log(t)


    //   // console.log("before=>",body2)
    //    var body2 = 
    //    {
    //     "amount_cents": '1000',
    //     "auth_token": t,
    //     "currency": 'EGP',
    //     "delivery_needed": 'false'
    //     };
    // var headers = { 'Content-Type': 'application/json' };
    // //console.log("header1=>",headers)
       
    //     // console.log("after1=>",body2)

    //      await this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe( async data => {
    //     // const id =data["token"] ;
    //     const id =data["id"] ;
    //     console.log(id);
    //     console.log("after=>",body2)
    //   })

    //   })

    // var headers = { 'Content-Type': 'application/json' };


    // console.log(headers)




  
    }
}




















//   secondCall() {
//     const headers = { 'Content-Type': 'application/json' };
//     const body2 = { 
//       "auth_token": this.global,
//       "delivery_needed": "false",
//       "amount_cents": "1000",
//       "currency": "EGP"
// };
//  return  this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
//    const id =data["id"] ;
//    console.log(id);
   
//   }); // end of second call

  //  }





// setTimeout(() => {
//   const headers = { 'Content-Type': 'application/json' };
//   const body2 = { 
//     "auth_token": global,
//     "delivery_needed": "false",
//     "amount_cents": "1000",
//     "currency": "EGP"
// };
// var x=  this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
//  const id =data["id"] ;
//  console.log(id);
 
// }); // end of second call
// }, 5000);












//   secondCall(){
//          const body2 = { 
//        "auth_token": this.global,
//        "delivery_needed": "false",
//        "amount_cents": "1000",
//        "currency": "EGP"
//  };
//   return  this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
//     const id =data["id"] ;
//     console.log(id);
    
//   } // end of second call



  // setTimeout(()=> console.log( "my new token"+this.global), 3000)
        

//   Paymob1(){
//  this.http.Paymob1().subscribe(data=>{
//    this.http.post().subscribe(data1=>{

//      console.log(data1)
//    })
//  })
// }


//         const body2 = { 
//        "auth_token": this.global,
//        "delivery_needed": "false",
//        "amount_cents": "1000",
//        "currency": "EGP"
//  };
// this.http.post('https://accept.paymobsolutions.com/api/ecommerce/orders', body2, { headers }).subscribe(data => {
//     const id =data["id"] ;
//     console.log(id);

    // });


      // console.log(this.global);

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
// }

