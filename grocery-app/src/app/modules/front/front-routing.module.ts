import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from '../app.component';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { CartComponent } from './cart/cart/cart.component'; 
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { SuccessComponent } from './cart/success/success.component';
// import { CategoryComponent } from './catalog/category/category.component';

// import { CategoryComponent } from './catalog/category/category.component';
// import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'cart/checkout',component:CheckoutComponent, canActivate: [AuthGuard]},
  {path:'cart/checkout/success',component:SuccessComponent, canActivate: [AuthGuard]},
  
  
  {
    path:"catalog",
    loadChildren:() => import('./catalog/catalog.module').then((c) => c.CatalogModule)
  },
  {
    path:"user",
    loadChildren:() => import('./user/user.module').then((u) => u.UserModule )
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
