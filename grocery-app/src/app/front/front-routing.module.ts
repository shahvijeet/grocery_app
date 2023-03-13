import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from '../app.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CategoryComponent } from './catalog/category/category.component';
import { HomeComponent } from './home/home.component';
// import { CategoryComponent } from './catalog/category/category.component';
// import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'front',component:HomeComponent},
  {path:'home',component:HomeComponent},
  
  
  {
    path:"catalog",
    loadChildren:() => import('./catalog/catalog.module').then((c) => c.CatalogModule)
  },
  {
    path:"user",
    loadChildren:() => import('./user/user.module').then((u) => u.UserModule)
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
