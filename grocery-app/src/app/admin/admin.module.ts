import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CoffeeTeaComponent } from './coffee-tea/coffee-tea.component';
import { MeatComponent } from './meat/meat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    VegetablesComponent,
    FruitsComponent,
    CoffeeTeaComponent,
    MeatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
