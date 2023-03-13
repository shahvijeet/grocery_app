import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { ExploreCategoryComponent } from './explore-category/explore-category.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { OtherDataComponent } from './other-data/other-data.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExploreCategoryComponent,
    FeaturedProductsComponent,
    OtherDataComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CoreModule
  ]
})
export class FrontModule { }
