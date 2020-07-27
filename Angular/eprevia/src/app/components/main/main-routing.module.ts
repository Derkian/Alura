import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent  } from "./main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkComponent } from "./work/work.component";

import { AuthGuard  } from "../auth/auth.guard";

const routes: Routes = [
  {
    path : 'main',
    component : MainComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : '',                        
        children : [
          { 
            path : '',
            component : DashboardComponent
          },
          {
            path : 'work',
            component : WorkComponent
          }
        ]        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
