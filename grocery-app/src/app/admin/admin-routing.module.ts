import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeTeaComponent } from './coffee-tea/coffee-tea.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitsComponent } from './fruits/fruits.component';
import { MeatComponent } from './meat/meat.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'admin',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'addveges',component:VegetablesComponent},
  {path:'addfruits',component:FruitsComponent},
  {path:'addcoffee',component:CoffeeTeaComponent},
  {path:'addmeat',component:MeatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
