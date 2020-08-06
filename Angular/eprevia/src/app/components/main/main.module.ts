//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask'


//Scroll 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { MainRoutingModule } from './main-routing.module';
//Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

//modules
import { MaterialUiModule } from '../material-ui.module';
import { MaterialModule } from "../material/material.module";

//Components
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementComponent } from './element/element.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { WorkComponent } from './work/work.component';
import { AdminComponent } from './admin/admin.component';
import { FieldAddEditComponent } from './field-add-edit/field-add-edit.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [    
    HeaderComponent,
    MainComponent,
    FooterComponent,    
    DashboardComponent,    
    DynamicFormComponent,
    ElementComponent,
    WorkComponent,
    AdminComponent,
    FieldAddEditComponent   
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(maskConfig),
    MaterialUiModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MainModule { }
