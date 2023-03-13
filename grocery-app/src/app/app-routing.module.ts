import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './front/user/login/login.component';

const routes: Routes = [
  {
    path:" ",
    redirectTo:"front",
    pathMatch:'full'
  },
  {
    path:"front",
    loadChildren:() => import('./front/front.module').then((m) => m.FrontModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
