import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
// import { ExploreCategoryComponent } from './explore-category/explore-category.component';
// import { FeaturedProductsComponent } from './featured-products/featured-products.component';
// import { OtherDataComponent } from './other-data/other-data.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { SuccessComponent } from './cart/success/success.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    IvyCarouselModule
  ]
})
export class FrontModule { }
