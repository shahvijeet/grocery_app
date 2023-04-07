import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDecsComponent } from './product-decs/product-decs.component';
const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductDetailsComponent},
  {path:'product-details/:slug',component:ProductListComponent},
  {path:'product-list/:id',component:ProductListComponent},
  {path:'product/:cat_name',component:ProductDetailsComponent},
  {path:'product-descrpition/:id/:slug',component:ProductDecsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
