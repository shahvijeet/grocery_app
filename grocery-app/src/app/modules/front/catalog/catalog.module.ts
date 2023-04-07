import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductDecsComponent } from './product-decs/product-decs.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductDecsComponent,
    
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    
    IvyCarouselModule
  ]
})
export class CatalogModule { }
