import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
// import { LoginComponent } from './front/user/login/login.component';

const routes: Routes = [
      {
        path:'',
        component:HomeComponent,
      },
      {path:'home',component:HomeComponent},
        // {
  //   path:" ",
  //   redirectTo:"front",
  //   pathMatch:'full'
  // },
  {
    path:"front",
    loadChildren:() => import('./modules/front/front.module').then((m) => m.FrontModule)
  },
  // {
  //   path:"admin",
  //   loadChildren:() => import('./admin/admin.module').then((a) => a.AdminModule)
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
