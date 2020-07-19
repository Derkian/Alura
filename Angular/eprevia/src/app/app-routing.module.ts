import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent  } from './components/core/dashboard/dashboard.component';
import { ItemComponent  } from './components/core/item/item.component';


const routes: Routes = [
  { path : '', redirectTo : 'item', pathMatch : 'full' },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'item', component : ItemComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
