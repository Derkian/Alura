import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent  } from "./main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkComponent } from "./work/work.component";
import { ElementsServicesService  } from "../../services/elements-services.service";

import { AuthGuard  } from "../auth/auth.guard";

const routes: Routes = [
  {
    path : 'main',
    component : MainComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : '',
        canActivateChild : [AuthGuard],
        children : [
          { 
            path : '',
            component : DashboardComponent
          },
          {
            path : 'work/:id',
            component : WorkComponent,
            resolve : {
              elements : ElementsServicesService
            }
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
