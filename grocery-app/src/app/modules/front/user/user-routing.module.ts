import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'profile',component:ProfileComponent , canActivate: [AuthGuard]},
  {path:'orders',component:OrderComponent ,  canActivate: [AuthGuard]},
  {path:'manageaddress',component:AddressComponent , canActivate: [AuthGuard]},
  {path:'password',component:ChangePassComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
