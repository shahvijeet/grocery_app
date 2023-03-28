import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';
import { ChangePassComponent } from './change-pass/change-pass.component';


@NgModule({
  declarations: [
     LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    OrderComponent,
    AddressComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class UserModule { }
