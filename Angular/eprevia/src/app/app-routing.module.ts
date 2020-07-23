import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent  } from './components/core/dashboard/dashboard.component';
import { WorkComponent   } from './components/core/work/work.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch : 'full' },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'work', component : WorkComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
