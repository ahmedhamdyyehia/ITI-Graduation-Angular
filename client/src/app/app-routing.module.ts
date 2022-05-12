import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { AuthGuard } from './core/gurads/auth.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'shop' , loadChildren:()=>import("./shop/shop.module").then(mod=>mod.ShopModule) },
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule) },
  {path: 'checkout' , canActivate:[AuthGuard], loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule) },
  {path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) },
  {path:'error' ,
  data: {
    'type': 404,
    'title': 'Page Not Found',
    'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
  },
   component:ErrorPageComponent},
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  {path:'**' , redirectTo:'' , pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
