import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductDetailsComponent},
  {path:'product-details/:slug',component:ProductListComponent},
  {path:'product-list/:id',component:ProductListComponent},
  {path:'product/:cat_name',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
