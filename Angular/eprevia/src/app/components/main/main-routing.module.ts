import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent  } from "./main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkComponent } from "./work/work.component";
import { ElementsServicesService  } from "../../services/elements-services.service";
import { AdminComponent } from './admin/admin.component';
import { FieldAddEditComponent  } from "./field-add-edit/field-add-edit.component";

import { AuthGuard  } from "../auth/auth.guard";

const routes: Routes = [
  {
    path : 'main',
    component : MainComponent,
    // canActivate : [AuthGuard],
    children : [
      {
        path : '',
        // canActivateChild : [AuthGuard],
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
          },
          {
            path : 'admin',
            component : AdminComponent,
            children : [
              {
                path : 'field/:id',
                component: FieldAddEditComponent
              }
            ]
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
