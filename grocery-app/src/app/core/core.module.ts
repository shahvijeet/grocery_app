import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent
  ]
})
export class CoreModule { }
