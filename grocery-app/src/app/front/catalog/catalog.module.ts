import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CoreModule
  ]
})
export class CatalogModule { }
